import React from 'react';
import { Link } from "react-router-dom";

const Categories = (props) => {
	const { all: categories } = props.category;
	const categoriesList = categories.map((item) =>{
		return (
			<li key={item._id}>
				<Link to={`/posts/category/${item._id}?name=${item.name}`}>{item.name}</Link>
			</li>
		);
	});

  return (
  	<div className="sidebar_box categories">
			<h3 className="text-center">Categories</h3><hr/>
			<ul className="category-list">
				{categoriesList}
			</ul>
		</div>
  );
};


export default Categories;