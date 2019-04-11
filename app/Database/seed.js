const Category = require("../Models/Category");
const Post = require("../Models/Post");
const User = require("../Models/User");
const categoryArr = ["News", "Transfer", "Rumors", "General"];
const isProduction = (process.env.NODE_ENV === "production");
const articlesData = require("./seed.json");

if(isProduction){
	categoryArr.forEach((category) =>{
		Category.create({name: category});
	});

	const seedData = Object.values(articlesData)[0];

	// Category.find({}, {'_id': 1}).then((categories) =>{
	// 	User.find({}, {'_id': 1}).limit(3).then((users) =>{
	// 		seedData.slice(0,100).map((obj) =>{
	// 			if(obj['language'] === 'english'){
	// 				Post.create({
	// 					body: truncateText(obj.text),
	// 					title: truncateText(obj.title, 90),
	// 					author: users[Math.floor(Math.random() * Math.floor(users.length))],
	// 					allowComments: false,
	// 					isMatch: false,
	// 					photos: {
	// 						location: obj["thread"].main_image,
	// 						filename: "placeholder_image",
	// 						size: 0
	// 					},
	// 					source: obj.url,
	// 					postType: "article",
	// 					category: categories[Math.floor(Math.random() * Math.floor(categories.length))]
	// 				});
	// 			}
	// 		});
	// 	});
	// });
	
	const truncateText = (str, length = 1000) =>{
		const defaultLength = length;
		const trailingChar = "....";

		if(str.length > defaultLength){
			return str.substring(0, defaultLength) + trailingChar;
		};

		return str;
	};
};

// Post.deleteMany({}).exec();
// Category.deleteMany({}).exec();

// Post.count({}, (err, count) => console.log('Post count is: ', count));
// Category.count({}, (err, count) => console.log('Category count is: ', count));
