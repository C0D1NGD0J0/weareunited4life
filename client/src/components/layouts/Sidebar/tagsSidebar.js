import React from 'react';
import { Link } from 'react-router-dom';

const PostsTags = ({ tags }) => {
	const tagsList = tags && tags.map((tag, i) =>{
		return(
			<li key={i}>
				<Link to={`/posts/tags/${tag._id}`}>
					{tag._id} <span className="badge">{tag.count}</span>
				</Link>
			</li>
		);
	})

  return (
  	<div className="sidebar_box categories">
			<h3 className="text-center">Tags</h3><hr/>
			<ul className="category-list">
				{tagsList}
			</ul>
		</div>
  );
};


export default PostsTags;