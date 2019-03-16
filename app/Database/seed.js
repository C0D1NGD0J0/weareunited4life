const Category = require("../Models/Category");
const categoryArr = ["News", "Transfer", "Rumors", "General"];

categoryArr.forEach((category) =>{
	Category.create({name: category});
	console.log(`${category} created`);
});

