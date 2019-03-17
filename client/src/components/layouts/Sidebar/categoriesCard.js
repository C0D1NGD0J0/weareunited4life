import React, { PropTypes } from 'react';

const Categories = (props) => {
  return (
  	<div className="sidebar_box categories">
			<h3 className="text-center">Categories</h3><hr/>
			<ul className="category-list">
				<li><a href="#!">Category Two</a></li>
				<li><a href="#!">Category One</a></li>
				<li><a href="#!">Category One</a></li>
				<li><a href="#!">Category One</a></li>
				<li><a href="#!">Category One</a></li>
				<li><a href="#!">Category One</a></li>
			</ul>
		</div>
  );
};


export default Categories;