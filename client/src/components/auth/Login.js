import React, { Component } from 'react';
import classnames from 'classnames';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
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
		const { errors } = this.state;

		return (
			<div role="tabpanel" className="tab-pane" id="login">
	    	<form onSubmit={this.onFormSubmit} className="form">
	        <div className={classnames("form-group", {"has-errors": errors.email})}>
	          <label>Email <small>(required)</small></label>
	          <input 
	          	type="text" 
	          	name="email"
	          	className="form-control"
	          	value={this.state.email}
	          	placeholder="Enter email..."
	          	onChange={this.onFormInputChange}
	          />
	          {errors.email && (<small className="help-block text-muted">{errors.email}</small>)}
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