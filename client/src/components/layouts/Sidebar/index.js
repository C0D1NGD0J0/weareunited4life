import React, { Component } from 'react';

class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	
	handleFollowUser = (userid) =>{
		console.log(userid);
	};

	render() {
		const children = this.props.children;
		const propsObject = {author: this.props.user, postimages: this.props.post, category: this.props.category, auth: this.props.auth, handleFollowUser: this.handleFollowUser};

		return (
			<div className="sidebar">
				{React.Children.map(children, (child) =>{
					return React.cloneElement(child, propsObject);
				})}
			</div>
		);
	}
}

export default Sidebar;