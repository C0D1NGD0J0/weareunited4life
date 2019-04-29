import React from 'react';
import { Link } from "react-router-dom";

const ContactList = ({ title, contacts }) => {
	const contact = contacts && contacts.map((contact, i) =>{
		return (
			<li key={contact.username}>
				<Link to={`/messages/${contact._id}`}>
					<img src={contact.avatar} className="img-responsive follower_img" alt="profile pic"/>
					<span className="follower_name">{contact.username}</span>
				</Link>
			</li>
		);
	});

  return (
  	<div className="sidebar">
			<div className="sidebar_box">
				<div className="followers">
					<h4 className="text-center">{title}:</h4><hr/>
					<ul className="followers_list">
						{contact}
					</ul>
				</div>
			</div>
		</div>
  );
};

export default ContactList;