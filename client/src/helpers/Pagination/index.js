import React, { PropTypes } from 'react';

const Pagination = ({ pagination }) => {
  return (
    <div className="panel-footer text-center">
			<nav aria-label="Page navigation">
			  <ul className="pagination pagination-md">
			    <li>
			      <a href="#" aria-label="Previous">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			    {Array(pagination.pageCount - 1).fill(Math.random())
			    	.map((item, index) => <li className={index +1 === pagination
			    		.currentPage? "current-page": "other-pages"} key={index}><a href="#"> {index + 1}</a></li> )}
			    <li>
			      <a href="#" aria-label="Next">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
			</nav>
		</div>  
  );
};
export default Pagination;
