const MAXSIZE = 1000000 * 5;
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

aws.config.update({
	secretAccessKey: process.env.AWS_SECRET_KEY,
	accessKeyId: process.env.AWS_ACCESS_KEY,
	region: "us-west-1"
});

const s3 = new aws.S3();

const uploadImg = function(req, res, next){
	let upload = multer({
		storage: multerS3({
			s3: s3,
			acl: 'public-read',
			bucket: process.env.AWS_BUCKET_NAME,
			key: function(req, file, cb){
				cb(null, file.originalname);
			}
		}),
		fileFilter: function(req, file, cb){
			const fileExt = file.mimetype.split("/")[1];
			const extArray = ['jpeg', 'jpg', 'png', 'gif'];
			const error = new Error("File type not support");

			if(!file) next();
			
			if(extArray.includes(fileExt)){
				cb(null, true);
			} else {
				cb(error, false);
			};
		},
		limits: {fileSize: MAXSIZE}
	}).array('photos', 5);

	upload(req, res, (err) =>{
		if(err instanceof multer.MulterError || err){
			console.log("UPLOD-Error: ",err);
			return res.status(400).json(err);
		};
		
		next();
	});
};

const deleteImg = async function(req, res, next){
	const { filename } = req.query;

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: filename
	};

	try {
		await s3.headObject(params).promise();
		try{
			await s3.deleteObject(params).promise();
			next();
		} catch(err) {
			return res.status(400).json(err);
		}
	} catch(err) {
		return res.status(404).json(err);
	}
};

module.exports = {uploadImg, deleteImg};