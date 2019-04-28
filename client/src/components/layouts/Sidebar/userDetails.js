import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

//use to keep track of if loggedin user is following post author
const _isFollowing = (user, followId) =>{
	return user.following.includes(followId);
};

const UserDetails = (props) => {
	const { author, auth: {isAuthenticated, user: currentuser}, followUser, unfollowUser } = props;
	
  return (
  	<div className="sidebar_box">
			<div className="sidebar_user-avatar text-center">
				<img src={author && author.avatar} alt="" className="img-responsive img-circle" style={{marginBottom: '1rem'}} />
				
				{ isAuthenticated && ((author && author._id) !== (currentuser.id || currentuser._id)) ? 
					<Fragment>
						<button 
							onClick={() => _isFollowing(currentuser, (author && author._id)) ? unfollowUser(author._id) : followUser(author._id)} 
							className="btn btn-sm btn-danger"
						>
							{ _isFollowing(currentuser, (author && author._id)) ? 'Unfollow' : 'Follow' }
						</button>
					
						{ _isFollowing(currentuser, (author && author._id)) ? null :
							<Link to={`/messages/${(author && author._id)}`} className="btn btn-sm btn-info" style={{marginLeft: '1rem'}}>Message</Link> 
						}
					</Fragment> : null
				}
			</div>

			<div className="sidebar_user-info">
				<ul className="list-group text-center">
					<li className="list-group-item">{author && author.username}</li>
					<li className="list-group-item">{author && author.location}</li>
					<li className="list-group-item">{author && author.role}</li>
				</ul>
			</div>
		</div>    
  );
};

export default UserDetails;