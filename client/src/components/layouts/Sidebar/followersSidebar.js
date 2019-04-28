import React from 'react';
import { Link } from "react-router-dom";

const Followers = ({ title, currentuser }) => {
	const followers = (currentuser && currentuser.following) ? currentuser.following.map((follower, i) =>{
		return(
			<li key={i}>
				<div className='follower'>
					<Link to={`/profile/${follower._id}`}>
						<img src={follower.avatar} className="img-responsive follower_img" alt="profile pic"/>
						<span className="follower_name">{follower.username}</span>
					</Link>
				</div>
			</li>
		);
	}) : null;
	
  return (
  	<div className="sidebar">
			<div className="sidebar_box">
				<div className="followers">
					<h4 className="text-center">{title}:</h4><hr/>
					<ul className="followers_list">
						{followers}
					</ul>
				</div>
			</div>
		</div>
  );
};


export default Followers;