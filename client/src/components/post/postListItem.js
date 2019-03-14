import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import Loader from "../../helpers/Loader";

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
				<div className="posts-meta pull-right">
					<ul className="list-inline post-actions">
						<li><a href="#"><i className="fa fa-commenting-o"></i> Comment</a><span className="badge">14</span></li>
						<li><a href="#"><i className="fa fa-thumbs-o-up"></i> Like</a><span className="badge">3</span></li>
						<li><a href="#"><i className="fa fa-thumbs-o-down"></i> Unlike</a><span className="badge">6</span></li>
						<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
					</ul>
				</div>
				<div className="posts-meta pull-left">
					<ul className="list-inline post-actions">
						<li><i className="fa fa-user-o"></i> {post.author.username}</li>
						<li><i className="fa fa-calendar-o"></i><Moment format="DD/MM/YYYY">{post.createdAt}</Moment></li>
					</ul>
				</div>
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