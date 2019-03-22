import React, { Component } from 'react';
import AuthTab from "../auth/authtab";
import { connect } from "react-redux";

class Landing extends Component {
	componentDidMount(){
		if (this.props.auth.isAuthenticated) {
	    this.props.history.push('/');
	  }
	}

	render() {
		return (
			<main id="content_wrapper" className="bg-color_black">
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="header-left">
									<h1 className="header hero-title">we <br/>are <br/>united</h1>
									<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident odit pariatur perferendis, doloremque, aut veritatis.</p>
								</div>
							</div>

							<div className="col-sm-4 col-sm-push-2">
								<AuthTab />
							</div>
						</div>
					</div>
				</header>
			</main>
		);
	}
}

const mapStateToProps = (state) =>({ 
	auth: state.auth 
});

export default connect(mapStateToProps)(Landing);