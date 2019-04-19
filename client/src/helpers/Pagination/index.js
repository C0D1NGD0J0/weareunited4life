import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { getCurrentUserPostsAction } from "../../Actions/userAction";
import { Link } from "react-router-dom";

class Pagination extends PureComponent {
	state = {
		page: 1
	}

	setPage = (page) =>{
		const { getCurrentUserPostsAction } = this.props;
		
		return getCurrentUserPostsAction(page);
	}

	render() {
		const { pagination } = this.props;
		const { page } = this.state;
		const pageNumbers = Array(pagination.pageCount).fill(Math.random()).map((item, index) => {
			return ( 
				<li className={index + 1 === pagination.currentPage ? "active": null} key={index}>
					<span> {index + 1}</span>
				</li>
			)
		});

		return (
			<div className="panel-footer text-center">
				<nav aria-label="Page navigation">
				  <ul className="pagination pagination-md">
				  	{
				  		pagination.currentPage !== 1 ?
						  	<li>
						      <span aria-label="Previous" onClick={() => this.setPage(pagination.currentPage - 1)}>
						      	<span aria-hidden="true">&laquo;</span>
						      </span>
						    </li>
						  : null
						}

				    { pageNumbers }
						
						{
							pagination.currentPage !== pagination.pageCount ?
								<li>
						      <span aria-label="Next" onClick={() => this.setPage(pagination.currentPage + 1)}>
						      	<span aria-hidden="true">&raquo;</span>
						      </span>
						    </li>
						  : null
						}
						
				  </ul>
				</nav>
			</div>
		);
	}
};

const mapDispatchToProps = {
	getCurrentUserPostsAction	
};

export default connect(null, mapDispatchToProps)(Pagination);