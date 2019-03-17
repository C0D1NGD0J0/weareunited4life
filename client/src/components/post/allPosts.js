import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import { getAllPostsAction } from "../../Actions/postAction";
import { getCategoriesAction } from "../../Actions/categoryAction";
import PostListItem from "./postListItem";
import Sidebar from "../layouts/Sidebar/";
import SidebarCategories from "../layouts/Sidebar/categoriesCard";

class AllPosts extends Component {
	componentDidMount(){
		this.props.getAllPostsAction();
		this.props.getCategoriesAction()
	}

	render() {
		const { posts: {all}, loading, category } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="All Posts" />
				<section id="posts" className="posts">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<Sidebar category={category && category}>
									<SidebarCategories />
								</Sidebar>
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
	posts: state.posts,
	category: state.category
});

const mapDispatchToProps = {
	getAllPostsAction,
	getCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);