import React, { Component } from 'react';
import  { Link } from "react-router-dom";

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
			        <li className="active"><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
			        <li><Link to="#"><i className="fa fa-soccer-ball-o"></i> Match-Day</Link></li>
			        <li><Link to="/posts"><i className="fa fa-list"></i> Posts</Link></li>
			        <li><Link to="/messages"><i className="fa fa-envelope"></i> Messages</Link></li>
			        <li className="dropdown">
			          <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></Link>
			          <ul className="dropdown-menu">
			            <li><Link to="#">Update Profile</Link></li>
			            <li><Link to="#">Add New Post</Link></li>
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