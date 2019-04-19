import React, { Component, Fragment } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import { getAllPostsAction, getPostsTags } from "../../Actions/postAction";
import { getCategoriesAction } from "../../Actions/categoryAction";
import PostListItem from "./postListItem";
import Sidebar from "../layouts/Sidebar/";
import Loader from "../../helpers/Loader";
import SidebarCategories from "../layouts/Sidebar/categoriesCard";
import SidebarTags from "../layouts/Sidebar/tagsSidebar";
import LoadMoreBtn from "../../helpers/Pagination/LoadMore";

class AllPosts extends Component {
	state ={
		tags: null,
		page: 1
	};

	componentDidMount(){
		if(!this.props.posts.all.length){
			this.props.getAllPostsAction();
		}
		this.props.getCategoriesAction();
	}
	
	render() {
		const { all, loading, hasMorePosts } = this.props.posts;
		const { category } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="All Posts" />
				<section id="posts" className="posts">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<Sidebar category={category && category}>
									<SidebarCategories />
									<SidebarTags />
								</Sidebar>
							</div>

							<div className="col-sm-9">
								<div className="posts-wrapper">
									{ loading ? <Loader /> : 
										<Fragment>
											<ul className="posts-list">
												<PostListItem allPosts={all} loading={loading}/>
											</ul>
											
											<LoadMoreBtn page={this.state.page} hasmoreposts={hasMorePosts} />
										</Fragment>
									}
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