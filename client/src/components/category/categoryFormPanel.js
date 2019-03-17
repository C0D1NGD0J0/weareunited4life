import React from 'react';

const CategoryForm = (props) => {
	const {value, onChange, onFormSubmit} = props;
	const customFormStyle = {
		width: "70%", 
		display: "inline-block", 
		margin: "0 2rem", 
		height: "3.5rem"
	};

  return (
  	<div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title">Create Category</h3>
		  </div>
		  
		  <div className="panel-body">
		    <form className="form" onSubmit={onFormSubmit}>
		      <label htmlFor="name">Name (required)</label>
		      <input 
		      	type="text"
		      	name="name"
		      	className="form-control" 
		      	placeholder="Category name" 
		      	style={customFormStyle}
		      	value={value}
	    			onChange={onChange}
		      />
		      <input type="submit" value="Submit" className="btn btn-danger" />
		    </form>
		  </div>
		</div> 
  );
};


export default CategoryForm;