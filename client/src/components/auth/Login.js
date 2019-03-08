import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { loginAction } from "../../Actions/authAction";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
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
			email: this.state.email,
			password: this.state.password
		};

		this.props.loginAction(user, this.props.history);
	}

	onFormReset = (e) =>{
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		const { errors } = this.state;
		
		return (
			<div role="tabpanel" className="tab-pane" id="login">
	    	<form onSubmit={this.onFormSubmit} className="form">
	    		<FormInputField
	    			label="email"
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
	    			label="password"
	    			name="password"
	    			type="password"
	    			labelinfo="(required)"
	    			value={this.state.password}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Password..."
	    			error={errors.password}
	    			isDisabled={false}
	    		/><br/>
	        
	        <InputSubmitBtn value="login" btnclass="btn-danger btn-block" /><br/>
	        <Link to="/forgot_password">Forgot Password?</Link>
	      </form>
	    </div>
		);
	}
};

Login.propTypes = {
	loginAction: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginAction })(withRouter(Login));