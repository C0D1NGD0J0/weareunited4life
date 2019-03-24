import React, { useState } from 'react';
import Moment from 'react-moment';

function validateAuth(resource){
	if(resource !== undefined){
		return resource.isAuthenticated ? true : false;
	};

	return false;
};

const PostMeta = ({ post, likePost, unlikePost, currentuser }) => {
	const isAuthenticated = validateAuth(currentuser);
	const hasLikedPost = isAuthenticated ? (post.like && post.like.users.includes(currentuser.user.id)) : "";

  return (
  	<>
	  	<ul className="list-inline post-actions pull-right">
				<li>
					<a href="#!">
						<i className="fa fa-commenting-o"></i>
					</a><span className="badge">{post.comments && post.comments.length}</span>
				</li>

				<li>
					<button onClick={(e) => {
						return (hasLikedPost ? unlikePost(e, post._id) : likePost(e, post._id))
					}} 
						disabled={isAuthenticated ? '' : "disabled"}>
						<i className="fa fa-thumbs-o-up"></i>
					</button>
					<span className="badge">{post.like && post.like.count}</span>
				</li>
				
				<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
			</ul>

			<ul className="list-inline post-actions pull-left">
				<li>
					<i className="fa fa-cogs"></i>&nbsp;
					{post.category && post.category.name}
				</li>
				<li>
					<i className="fa fa-clock-o"></i>&nbsp;
					<Moment format="H:m:s">{post.createdAt}</Moment>
				</li>
				<li>
					<i className="fa fa-calendar-o"></i>&nbsp;
					<Moment format="DD/MM/YYYY">{post.createdAt}</Moment>
				</li>
			</ul>
		</>
  );
};


export default PostMeta;