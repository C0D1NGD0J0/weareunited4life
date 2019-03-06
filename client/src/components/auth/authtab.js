import React from 'react';
import Login from "./Login";
import Register from "./Register";

const authTab = (props) => {
	return (
		<div className="header-right">
			<div className="well header-right_auth-forms">
				<ul className="nav nav-tabs" role="tablist">
			    <li role="presentation" className="active">
			    	<a href="#signup" aria-controls="home" role="tab" data-toggle="tab">Signup</a>
			    </li>
					<li role="presentation">
						<a href="#login" aria-controls="profile" role="tab" data-toggle="tab">Login</a>
					</li>
			  </ul>

			  <div className="tab-content">
			    <Register />
			  	<Login />
			  </div>
			</div>
		</div>
  );
};

export default authTab;