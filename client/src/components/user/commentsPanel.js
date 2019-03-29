import React from 'react';
import { Link } from "react-router-dom";
import Moment from "react-moment";

const CommentsPanel = ({ comments }) => {
	const tableRow = comments && comments.map((c, i) =>{
		return(
			<tr key={i}>
	      <td>{c.post.title}</td>
	      <td><Moment fromNow>{c.createdAt}</Moment></td>
	      <td>
	      	<Link to={`/posts/${c.post._id}`}>
	      		<span className="i fa fa-eye"></span>
	      	</Link>
	      </td>
	    </tr>
		);
	});

  return (
  	<div className="panel panel-default profile-page_myposts-list">
			<div className="panel-heading">
				<a href="#myCollapse3" data-toggle="collapse" aria-expanded="true">
					<h3 className="panel-title">Posts you commented:</h3>
				</a>
			</div>
			
			<div id="myCollapse3" className="collapse">
  			<div className="panel-body">
  				<table className="table table-striped table-bordered">
				    <thead>
				      <tr>
				        <th>Post Title</th>
				        <th>Comment Posted:</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>
				    	{tableRow}
				    </tbody>
				  </table>
  			</div>

  			<div className="panel-footer text-center">
  				<nav aria-label="Page navigation">
					  <ul className="pagination pagination-md">
					    <li>
					      <a href="#" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
					    <li><a href="#">1</a></li>
					    <li><a href="#">2</a></li>
					    <li><a href="#">3</a></li>
					    <li><a href="#">4</a></li>
					    <li><a href="#">5</a></li>
					    <li>
					      <a href="#" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					  </ul>
					</nav>
  			</div>
  		</div>
		</div>
  );
};

export default CommentsPanel;