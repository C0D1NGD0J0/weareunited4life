import React from 'react';

const Sidebar = (props) => {
	const children = props.children;

  return (
  	<div className="sidebar">
			{React.Children.map(children, (child) =>{
				return React.cloneElement(child, {user: props.user, post: props.post, category: props.category});
			})}
		</div>
  );
};


export default Sidebar;