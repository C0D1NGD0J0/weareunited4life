import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";

const PostsPanel = (props) => {
	const { posts, deletePost } = props;

	const postTableRow = posts.map((post, i) =>{
		return(
			<tr key={i}>
        <td>{post.title}</td>
        <td>{post.category && post.category.name}</td>
        <td><Moment format="DD/MM/YYYY">{post.createdAt}</Moment></td>
        <td>
        	<Link to={`/posts/${post._id}/edit`}><i className="fa fa-pencil"></i></Link>
        	<Link to={`/posts/${post._id}`}><i className="fa fa-eye"></i></Link>
        	<span onClick={() => deletePost(post._id)}><i className="fa fa-trash"></i></span>
        </td>
      </tr>
		);
	});

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
				        <th>Category</th>
				        <th>Date</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>
				      {postTableRow}
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