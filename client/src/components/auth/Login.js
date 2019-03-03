import React, { Component } from 'react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	};

	onFormSubmit = (e) =>{
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};

		console.log(user);
	}

	render() {
		return (
			<div role="tabpanel" className="tab-pane active" id="login">
	    	<form onSubmit={this.onFormSubmit} className="form">
	        <div className="form-group">
	          <label>Email <small>(required)</small></label>
	          <input 
	          	type="text" 
	          	name="email"
	          	className="form-control"
	          	value={this.state.email}
	          	placeholder="Enter email..."
	          	onChange={this.onFormInputChange}
	          />
	        </div>

	        <div className="form-group">
	          <label>Password <small>(required)</small></label>
	          <input 
	          	type="password"
	          	name="password"
	          	className="form-control"
	          	value={this.state.password}
	          	placeholder="Enter password..."
	          	onChange={this.onFormInputChange} 
	          />
	        </div><br/>
	        
	        <input type="submit" value="Login" className="btn btn-danger btn-block"/><br/>
	        <a href="#">Forgot Password?</a>
	      </form>
	    </div>
		);
	}
};

export default Login;