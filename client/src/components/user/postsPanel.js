import React from 'react';

const PostsPanel = (props) => {
  return (
    <div className="panel panel-default profile-page_myposts-list">
			<div className="panel-heading">
				<a href="#myCollapse2" data-toggle="collapse" aria-expanded="true">
					<h3 className="panel-title">Posts Created by you:</h3>
				</a>
			</div>
			
			<div id="myCollapse2" className="collapse">
  			<div className="panel-body">
  				<table className="table table-striped table-bordered">
				    <thead>
				      <tr>
				        <th>Title</th>
				        <th>Status</th>
				        <th>Date</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>Post Title One</td>
				        <td>draft</td>
				        <td>12/02/2019</td>
				        <td>
				        	<span className="i fa fa-pencil"></span>
				        	<span className="i fa fa-eye"></span>
				        	<span className="i fa fa-trash"></span>
				        </td>
				      </tr>
				      <tr>
				        <td>Post Title Two</td>
				        <td>draft</td>
				        <td>14/02/2019</td>
				        <td>
				        	<span className="i fa fa-pencil"></span>
				        	<span className="i fa fa-eye"></span>
				        	<span className="i fa fa-trash"></span>
				        </td>
				      </tr>
				      <tr>
				        <td>Post Title Three</td>
				        <td>published</td>
				        <td>21/02/2019</td>
				        <td>
				        	<span className="i fa fa-pencil"></span>
				        	<span className="i fa fa-eye"></span>
				        	<span className="i fa fa-trash"></span>
				        </td>
				      </tr>
				      <tr>
				        <td>Post Title Four</td>
				        <td>published</td>
				        <td>26/02/2019</td>
				        <td>
				        	<span className="i fa fa-pencil"></span>
				        	<span className="i fa fa-eye"></span>
				        	<span className="i fa fa-trash"></span>
				        </td>
				      </tr>
				      <tr>
				        <td>Post Title Five</td>
				        <td>draft</td>
				        <td>1/03/2019</td>
				        <td>
				        	<span className="i fa fa-pencil"></span>
				        	<span className="i fa fa-eye"></span>
				        	<span className="i fa fa-trash"></span>
				        </td>
				      </tr>
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


export default PostsPanel;