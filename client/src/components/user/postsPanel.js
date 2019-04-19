import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import Pagination from "../../helpers/Pagination/";

const PostsPanel = (props) => {
	const { posts, deletePost, pagination } = props;

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
			
			<div id="myCollapse2" className="collapse in">
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
				
  			{pagination && <Pagination pagination={pagination}/>}
  		</div>
		</div>  
  );
};


export default PostsPanel;