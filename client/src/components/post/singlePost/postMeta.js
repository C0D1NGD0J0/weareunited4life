import React from 'react';
import Moment from 'react-moment';

const PostMeta = (props) => {
	const { post, likePost } = props;

  return (
  	<>
	  	<ul className="list-inline post-actions pull-right">
				<li>
					<a href="#!">
						<i className="fa fa-commenting-o"></i>
					</a><span className="badge">{post.comments && post.comments.length}</span>
				</li>
				<li>
					<button onClick={(e) => likePost(e, post._id)}>
						<i className="fa fa-thumbs-o-up"></i>
					</button>
					<span className="badge">{post.like && post.like.count}</span>
				</li>
				<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
			</ul>

			<ul className="list-inline post-actions pull-left">
				<li>
					<i className="fa fa-cogs"></i> 
					{post.category && post.category.name}
				</li>
				<li>
					<i className="fa fa-clock-o"></i>  
					<Moment format="H:m:s">{post.createdAt}</Moment>
				</li>
				<li>
					<i className="fa fa-calendar-o"></i> 
					<Moment format="DD/MM/YYYY">{post.createdAt}</Moment>
				</li>
			</ul>
		</>
  );
};


export default PostMeta;