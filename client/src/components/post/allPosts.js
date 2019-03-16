import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import { getAllPostsAction } from "../../Actions/postAction";
import PostListItem from "./postListItem";

class AllPosts extends Component {
	componentDidMount(){
		this.props.getAllPostsAction();
	}

	render() {
		const { posts: {all}, loading } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="All Posts" />
				<section id="posts" className="posts">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<div className="sidebar">
									<div className="sidebar_box categories">
										<h3 className="text-center">Categories</h3><hr/>
										<ul className="category-list">
											<li><a href="#!">Category Two</a></li>
											<li><a href="#!">Category One</a></li>
											<li><a href="#!">Category One</a></li>
											<li><a href="#!">Category One</a></li>
											<li><a href="#!">Category One</a></li>
											<li><a href="#!">Category One</a></li>
										</ul>
									</div>

									<div className="sidebar_box search-box">
										<h3 className="text-center">Search</h3><hr/>
									</div>
								</div>
							</div>

							<div className="col-sm-9">
								<div className="posts-wrapper">
									<ul className="posts-list">
										<PostListItem allPosts={all} loading={loading}/>
									</ul>
									
									<p className="text-center" style={{marginTop: "2rem"}}>
										<a href="#" className="btn btn-danger">Load More</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) =>({
	posts: state.posts
});

const mapDispatchToProps = {
	getAllPostsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);