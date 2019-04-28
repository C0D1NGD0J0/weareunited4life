import React, { PropTypes } from 'react';
import { Link } from "react-router-dom";

const ContactList = ({ title, contact_list }) => {
  return (
  	<div className="sidebar">
			<div className="sidebar_box">
				<div className="followers">
					<h4 className="text-center">{title}:</h4><hr/>
					<ul className="followers_list">
						
					</ul>
				</div>
			</div>
		</div>
  );
};

export default ContactList;