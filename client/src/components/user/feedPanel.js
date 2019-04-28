import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import Pagination from "../../helpers/Pagination/";

const FeedPanel = ({ posts, pagination }) => {
	const postTableRow = posts.map((post, i) =>{
		return(
			<tr key={i}>
        <td>{post.title}</td>
        <td>{post.category && post.category.name}</td>
        <td><Moment format="DD/MM/YYYY">{post.createdAt}</Moment></td>
        <td>{post.author.username}</td>
      </tr>
		);
	});

  return (
    <div className="panel panel-default profile-page_myposts-list">
			<div className="panel-heading">
				<a href="#myCollapse4" data-toggle="collapse" aria-expanded="true">
					<h3 className="panel-title">Posts Feed:</h3>
				</a>
			</div>
			
			<div id="myCollapse4" className="collapse in">
  			<div className="panel-body">
  				<table className="table table-striped table-bordered">
				    <thead>
				      <tr>
				        <th>Title</th>
				        <th>Category</th>
				        <th>Date</th>
				        <th>Author</th>
				      </tr>
				    </thead>
				    <tbody>
				      {postTableRow}
				    </tbody>
				  </table>
  			</div>
				
  			{pagination && <Pagination pagination={pagination} type="feed"/>}
  		</div>
		</div>  
  );
};

export default FeedPanel;