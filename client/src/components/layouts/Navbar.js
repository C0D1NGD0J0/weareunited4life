import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">UnitedFanForum</a>
			    </div>
			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			        <li className="active"><a href="index.html"><i className="fa fa-home"></i> Home</a></li>
			        <li><a href="#"><i className="fa fa-soccer-ball-o"></i> Match-Day</a></li>
			        <li><a href="posts.html"><i className="fa fa-list"></i> Posts</a></li>
			        <li><a href="messages.html"><i className="fa fa-envelope"></i> Messages</a></li>
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Update Profile</a></li>
			            <li><a href="#">Add New Post</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
};

export default Navbar;