import React from 'react';

const PostListItem = (props) => {
  return (
  	<li className="posts-list-item clearfix">
			<div>
				<a href="post.html" className="posts-list-item__link">
					<h2 className="posts-list-item__title"><i className="fa fa-star"></i> Post Title Goes Here</h2>
				</a>
				<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam facilis fugit distinctio ipsum tempore similique fuga est repudiandae officiis.</p>
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
					<li><a href="#"><i className="fa fa-user-o"></i> James Blunt</a></li>
					<li><a href="#"><i className="fa fa-calender-o"></i> 2hrs ago</a></li>
				</ul>
			</div>
		</li> 
  );
};


export default PostListItem;