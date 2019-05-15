import React, { Component } from 'react';
import AllPosts from "./allPosts";
import qs from "query-string";
import { connect } from "react-redux";
import { clearPostsAction } from "../../Actions/utilAction";
import { getAllPostsAction, getPostsByCategory } from "../../Actions/postAction";

class PostsByCategory extends Component {
	state = {
		page: 1
	}

	componentDidMount(){
		const { categoryId } = this.props.match.params;
		this.props.getPostsByCategory(categoryId, this.state.page);
	}

	componentDidUpdate(prevProps, prevState){
		const { categoryId } = this.props.match.params;
		if(prevProps.match.params.categoryId !== categoryId){
			console.log(prevProps.match.params.categoryId, categoryId)
			this.props.clearPostsAction();
			this.props.getPostsByCategory(categoryId, );
		};
	}

	componentWillUnmount(){
		this.props.clearPostsAction();
	}

	render() {
		let query = qs.parse(this.props.location.search);
		const { all } = this.props.posts;
		
		return (
			<AllPosts title={query.name} allPosts={all} />
		)
	}
};

const mapStateToProps = (state) =>({
	posts: state.posts
});

const mapDispatchToProps = {
	getPostsByCategory, clearPostsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategory);