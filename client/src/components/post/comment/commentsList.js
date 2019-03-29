import React from 'react';
import Moment from 'react-moment';

const CommentListItem = ({ comments, deleteComment, postid, currentuser }) => {
	const commentsList = comments.map((comment, i) =>{
		return (<li className="comment" key={i}>
  		<div className="row">
				<div className="col-sm-12">
					<div className="comment_bubble clearfix">
						<p>{comment.body}</p>

						<ul className="list-inline post-actions pull-right">
							<li>
								<small className="text-muted">
									<Moment format='hh:mm:a'>{comment.createdAt}</Moment>
								</small>
							</li>
							<li>
								<small className="text-muted">
									<Moment format="DD/MM/YYYY">{comment.createdAt}</Moment>
								</small>
							</li>
							<li><a href="#!"><small><b>{comment.author.username}</b></small></a></li>
							{ currentuser.id === comment.author.id ?
								<li>
									<button onClick={() => deleteComment(postid, comment._id)} className="btn-danger">
										<i className="fa fa-times"></i>
									</button>
								</li>
								: null
							}
						</ul>
					</div>
				</div>
			</div>
		</li>)
	});

  return (
  	commentsList
  );
};

CommentListItem.displayName = 'CommentListItem';

export default CommentListItem;