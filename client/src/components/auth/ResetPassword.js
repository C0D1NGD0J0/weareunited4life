import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import { resetPasswordAction } from "../../Actions/authAction";
import { clearStateErrors } from "../../Actions/utilAction";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class ResetPassword extends Component {
	constructor(props){
		super(props);
		this.state = {
			password: "",
			password2: "",
			token: "",
			errors: {}
		}
	}
	
	componentDidMount(){
		const { token } = this.props.match.params;
		if(token && (token.length === 30)){
			return this.setState({token});
		};

		this.props.history.push("/forgot_password");
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.errors !== this.props.errors){
			this.setState({errors: this.props.errors});
		};
	}

	componentWillUnmount(){
		this.props.clearStateErrors();
	}

	onFormInputChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value })
	}

	onFormSubmit = (e) =>{
		e.preventDefault();

		const newPwd = {
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.resetPasswordAction(newPwd, this.state.token);
	}

	render() {
		const { errors } = this.state;
		
		return (
			<div style={{margin: 0+"px", padding: 0+"px"}}>
				<Header title="Reset Password" />

				<main id="content_wrapper" className="bg-img_playerImg-1">
					<section style={{padding: 9+"rem"}}>
						<div className="container">
							<div className="row">
								<div className="col-sm-6">
									<div id="pwdforgot">
				            <form className="form" onSubmit={this.onFormSubmit}>
				            	<FormInputField
							    			label="Password"
							    			name="password"
							    			type="password"
							    			labelinfo="(required)"
							    			value={this.state.password}
							    			onChange={this.onFormInputChange}
							    			placeholder="Enter new password..."
							    			error={errors.password}
							    			isDisabled={false}
							    		/>

							    		<FormInputField
							    			label="Password Confirmation"
							    			name="password2"
							    			type="password"
							    			labelinfo="(required)"
							    			value={this.state.password2}
							    			onChange={this.onFormInputChange}
							    			placeholder="Confirm new password..."
							    			error={errors.password2}
							    			isDisabled={false}
							    		/>

				             	<InputSubmitBtn value="Reset Password" btnclass="btn-danger" />
				            </form>
				          </div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) =>({ 
	errors: state.errors
});

const mapDispatchToProps = {
	resetPasswordAction,
	clearStateErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);