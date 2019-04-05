import React, { Component } from 'react';
import { connect } from "react-redux";
import { followUserAction, unFollowUserAction } from "../../../Actions/userAction";
import { getTags } from "../../../Actions/postAction";

class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state = {isFollowing: false, tags: []};
	}

	componentDidMount(){
		getTags().then((tags) =>{
			this.setState({tags: [...tags]})
		}).catch((err) =>{
			this.setState({tags: err.msg});
		});
	}
	
	_followUser = (followid) =>{
		this.props.followUserAction(followid);
	};

	_unFollowUser = (followid) =>{
		this.props.unFollowUserAction(followid);
	}

	render() {
		const children = this.props.children;
		const propsObject = {
			author: this.props.user, 
			postimages: this.props.post, 
			category: this.props.category, 
			auth: this.props.auth, 
			followUser: this._followUser, 
			unfollowUser: this._unFollowUser,
			tags: this.state.tags
		};

		return (
			<div className="sidebar">
				{React.Children.map(children, (child) =>{
					return React.cloneElement(child, propsObject);
				})}
			</div>
		);
	}
}

const mapDispatchToProps = {
	followUserAction,
	unFollowUserAction
};

export default connect(null, mapDispatchToProps)(Sidebar);