const Category = require("../Models/Category");
const Post = require("../Models/Post");
const categoryArr = ["News", "Transfer", "Rumors", "General"];
const faker = require("faker");

// categoryArr.forEach((category) =>{
// 	Category.create({name: category});
// 	console.log(`${category} created`);
// });


const totalPosts = 15;
const categories = ["5c8d51a8a1859f2aea771eda", "5c8d51a8a1859f2aea771edb", "5c8d51a8a1859f2aea771edc", "5c8d51a8a1859f2aea771edd"];

Post.deleteMany({}).exec();

for(let i =0; i < totalPosts; i++){
	Post.create({
		body: faker.lorem.paragraphs(),
		title: `Post title--${i}`,
		author: "5c8400707d15e26411713397",
		allowComments: false,
		isMatch: false,
		photos: {
			location: "http://lorempixel.com/450/450/?random=456",
			filename: ""
		},
		postType: "article",
		category: categories[Math.floor(Math.random() * Math.floor(categories.length))]
	});
};

console.log("15 posts created");