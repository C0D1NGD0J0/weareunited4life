import React, {Fragment} from 'react';

const UserDetails = (props) => {
	const { author, auth: {isAuthenticated, user: currentuser}, handleFollowUser } = props;
	
  return (
  	<div className="sidebar_box">
			<div className="sidebar_user-avatar text-center">
				<img src={author && author.avatar} alt="" className="img-responsive img-circle" />
				{ isAuthenticated ? 
					<Fragment>
						<button onClick={() => handleFollowUser(author._id)} className="btn btn-sm btn-danger">Follow</button>
						<span className="btn btn-sm btn-info">Message</span>
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