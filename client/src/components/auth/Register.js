import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerAction } from "../../Actions/authAction";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class Register extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			username: '',
			location: '',
			password: '',
			password2: '',
			errors: {}
		}
	}
	
	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.errors !== prevState.errors){
			return {errors: nextProps.errors};
		};

		return null;
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const user = {
			username: this.state.username,
			email: this.state.email,
			location: this.state.location,
			password: this.state.password,
			password2: this.state.password2
		};
		
		this.props.registerAction(user, this.props.history);
	}

	onFormReset = (e) =>{
		this.setState({
			email: '',
			username: '',
			location: '',
			password: '',
			password2: ''
		})
	}

	render() {
		const { errors } = this.state;

		return (
			<div role="tabpanel" className="tab-pane active" id="signup">
	    	<form onSubmit={this.onFormSubmit} className="form">
	    		<FormInputField
	    			label="Username"
	    			name="username"
	    			labelinfo="(required)"
	    			value={this.state.username}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Username..."
	    			error={errors.username}
	    			isDisabled={false}
	    		/>

	    		<FormInputField
	    			label="Email"
	    			name="email"
	    			type="email"
	    			labelinfo="(required)"
	    			value={this.state.email}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Email..."
	    			error={errors.email}
	    			isDisabled={false}
	    		/>

	    		<FormInputField
	    			label="location"
	    			name="location"
	    			labelinfo="(required)"
	    			value={this.state.location}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter location..."
	    			error={errors.location}
	    			isDisabled={false}
	    		/>

	    		<FormInputField
	    			label="password"
	    			name="password"
	    			type="password"
	    			labelinfo="(required)"
	    			value={this.state.password}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Password..."
	    			error={errors.password}
	    			isDisabled={false}
	    		/>

	    		<FormInputField
	    			label="confirm password"
	    			type="password"
	    			name="password2"
	    			labelinfo="(required)"
	    			value={this.state.password2}
	    			onChange={this.onFormInputChange}
	    			placeholder="Password Confirmation..."
	    			error={errors.password2}
	    			isDisabled={false}
	    		/><br/>
	    		
					<InputSubmitBtn value="signup" btnclass="btn-danger btn-block" />
	      </form>
	      <a href="#">Forgot Password?</a>
	    </div>
		);
	}
};

Register.propTypes = {
	registerAction: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
	errors: state.errors
});

export default connect(mapStateToProps, { registerAction })(withRouter(Register));