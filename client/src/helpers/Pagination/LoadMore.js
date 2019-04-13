import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getAllPostsAction } from "../../Actions/postAction";
import PropTypes from 'prop-types';

class LoadMoreBtn extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 2,
		};
	}

	handleBtnClick = (e) =>{
		e.preventDefault();
		this.setState((state, prop) =>({
			page: state.page + 1
		}));

		return this.props.getAllPostsAction(this.state.page)
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

LoadMoreBtn.propTypes = {
  page: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  hasMoreResources: PropTypes.bool
};

const mapDispatchToProps = {
	getAllPostsAction	
};

export default connect(null, mapDispatchToProps)(LoadMoreBtn);