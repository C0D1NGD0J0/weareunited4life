import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) =>{
		this.state({hasError: true, errorMessage: error});
	}

	render() {
		if(this.state.hasError){
			return(
				<div className="jumbotron text-center">
					<h1 className="h1">{this.state.errorMessage}</h1>
				</div>
			);
		} else {
			return this.props.children;
		};
	}
};

export default ErrorBoundary;