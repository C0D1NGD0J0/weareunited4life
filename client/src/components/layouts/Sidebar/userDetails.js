import React from 'react';

const UserDetails = (props) => {
	const { user } = props;
	
  return (
  	<div className="sidebar_box">
			<div className="sidebar_user-avatar text-center">
				<img src={user && user.avatar} alt="" className="img-responsive img-circle" />
				<span className="btn btn-sm btn-danger">Follow</span>
				<span className="btn btn-sm btn-info">Message</span>
			</div>

			<div className="sidebar_user-info">
				<ul className="list-group">
					<li className="list-group-item">{user && user.username}</li>
					<li className="list-group-item">{user && user.location}</li>
					<li className="list-group-item">{user && user.role}</li>
				</ul>
			</div>
		</div>    
  );
};


export default UserDetails;