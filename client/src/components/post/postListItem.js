import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import Loader from "../../helpers/Loader";
import PostMeta from "./singlePost/postMeta";

const truncateText = (str) =>{
	const defaultLength = 200;
	const trailingChar = "....";

	if(str.length > defaultLength){
		return str.substring(0, defaultLength) + trailingChar;
	};

	return str;
};

const PostListItem = (props) => {
	const { allPosts, loading } = props;
	const postItem = allPosts.map((post,i) =>{
		return(
			<li className="posts-list-item clearfix" key={i.toString()}>
				<div>
					<Link to={`/posts/${post._id}`} className="posts-list-item__link">
						<h2 className="posts-list-item__title">
							{post.isMatch ? <i className="fa fa-star"></i> : ""}
							{post.title}
						</h2>
					</Link>
					<p className="lead">{truncateText(post.body)}</p>
				</div>
				<PostMeta post={post} />
			</li>
		)
	});
	
	return (
		<>
			{loading ? <Loader /> : postItem}
		</>
  );
};


export default PostListItem;