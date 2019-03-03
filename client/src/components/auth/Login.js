import React, { Component } from 'react';

class Login extends Component {
	
	render() {
		return (
			<div role="tabpanel" className="tab-pane active" id="login">
	    	<form action="login.html" className="form">
	        <div className="form-group">
	          <label>Email <small>(required)</small></label>
	          <input type="text" className="form-control" placeholder="Enter Email"/>
	        </div>

	        <div className="form-group">
	          <label>Password <small>(required)</small></label>
	          <input type="password" className="form-control" placeholder="Password"/>
	        </div>
					<br/>
	        <input type="submit" value="Login" className="btn btn-danger btn-block"/>
					<br/>
	        <a href="#">Forgot Password?</a>
	      </form>
	    </div>
		);
	}
};

export default Login;