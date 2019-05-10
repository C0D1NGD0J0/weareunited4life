import React from 'react';

const Categories = (props) => {
	const { all: categories } = props.category;
	const categoriesList = categories.map((item) =>{
		return (
			<li key={item._id}><a href={`/api/posts/categories/?categoryId=${item._id}`}>{item.name}</a></li>
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