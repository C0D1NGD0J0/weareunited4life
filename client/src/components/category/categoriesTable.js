import React from 'react';

const Categories = (props) => {
  return (
    <div class="panel panel-default">
		  <div class="panel-heading red-bg">
		    <h3 class="panel-title">Manage Categories</h3>
		  </div>
		  
		  <div class="panel-body table-responsive">
		    <table class="table table-condensed table-striped">
		      <thead>
		        <tr>
		          <th>Name</th>
		          <th>Action</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>News</td>
		          <td>
		            <a href="#!"><i class="fa fa-trash"></i></a>
		            <a href="#!"><i class="fa fa-pencil"></i></a>
		          </td>
		        </tr>
		        <tr>
		          <td>Transfer</td>
		          <td>
		            <a href="#!"><i class="fa fa-trash"></i></a>
		            <a href="#!"><i class="fa fa-pencil"></i></a>
		          </td>
		        </tr>
		        <tr>
		          <td>Rumors</td>
		          <td>
		            <a href="#!"><i class="fa fa-trash"></i></a>
		            <a href="#!"><i class="fa fa-pencil"></i></a>
		          </td>
		        </tr>
		        <tr>
		          <td>Design</td>
		          <td>
		            <a href="#!"><i class="fa fa-trash"></i></a>
		            <a href="#!"><i class="fa fa-pencil"></i></a>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		</div>
  );
};


export default Categories;