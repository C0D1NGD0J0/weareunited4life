import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPasswordAction } from "../../Actions/authAction";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class ForgotPassword extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			errors: {}
		}
	}
	
	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push("/");
		};
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.errors !== this.props.errors){
			this.setState({errors: this.props.errors});
		};
	}

	onFormInputChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value })
	}

	onFormSubmit = (e) =>{
		e.preventDefault();

		const userEmail = {
			email: this.state.email
		};

		this.props.forgotPasswordAction(userEmail);
	}
	
	clearErrorDisplay = () =>{
		const {email} = this.state.errors;

		if(email){
			return setTimeout(() =>{
				this.setState({errors: {}});
			}, 2000);	
		};
	}

	render() {
		const { errors } = this.state;
		
		return (
			<div style={{margin: 0+"px", padding: 0+"px"}}>
				<Header title="Forgot Password" />

				<main id="content_wrapper" className="bg-img_playerImg-1">
					<section style={{padding: 9+"rem"}}>
						<div className="container">
							<div className="row">
								<div className="col-sm-6">
									<div className="pwdforgot">
				            <form className="form" onSubmit={this.onFormSubmit}>
				            	<FormInputField
							    			label="Enter your email below."
							    			name="email"
							    			type="email"
							    			labelinfo="(required)"
							    			value={this.state.email}
							    			onChange={this.onFormInputChange}
							    			placeholder="Enter registered email..."
							    			error={errors.email}
							    			isDisabled={false}
							    		/>

				             	<InputSubmitBtn value="Reset Password" btnclass="btn-danger" />
				            </form><br/>
				            <h5>Already have an account? <Link to="/login">Login</Link></h5>
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
	errors: state.errors,
	auth: state.auth 
});

export default connect(mapStateToProps, { forgotPasswordAction })(ForgotPassword);