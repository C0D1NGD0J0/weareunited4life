import React from 'react';

const Categories = (props) => {
	const categories = props.categories;

	const tableRow = categories.map((category) =>{
		return(
			<tr key={category._id}>
        <td>{category.name}</td>
        <td>
          <a href="#!"><i className="fa fa-trash"></i></a>
          <a href="#!"><i className="fa fa-pencil"></i></a>
        </td>
      </tr>
		)
	});
  return (
    <div className="panel panel-default">
		  <div className="panel-heading red-bg">
		    <h3 className="panel-title">Manage Categories</h3>
		  </div>
		  
		  <div className="panel-body table-responsive">
		    <table className="table table-condensed table-striped">
		      <thead>
		        <tr>
		          <th>Name</th>
		          <th>Action</th>
		        </tr>
		      </thead>
		      <tbody>
		        {tableRow}
		      </tbody>
		    </table>
		  </div>
		</div>
  );
};


export default Categories;