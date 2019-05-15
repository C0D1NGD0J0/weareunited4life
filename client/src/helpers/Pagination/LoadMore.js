import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getAllPostsAction } from "../../Actions/postAction";
import PropTypes from 'prop-types';

class LoadMoreBtn extends Component {
	constructor(props){
		super(props);
	}

	handleBtnClick = (e) =>{
		e.preventDefault();
		this.props.nextPage();
		// let { page } = this.state;
		// this.setState({page: page + 1});
		
		// return this.props.getAllPostsAction(page);
	}

	render() {
		const { hasmoreposts } = this.props;
		
		return (
			<Fragment>
				{ 
					hasmoreposts ? 
						<div className="text-center">
							<button onClick={this.handleBtnClick} className="btn btn-danger">Load More</button> 
						</div>
					: null
				}
			</Fragment>
		);
	}
};

const mapDispatchToProps = {
	getAllPostsAction	
};

export default connect(null, mapDispatchToProps)(LoadMoreBtn);