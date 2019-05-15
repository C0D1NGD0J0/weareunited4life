import React, { Component, Fragment } from 'react';
import Header from "../layouts/pageHeader";
import qs from "query-string";
import { connect } from "react-redux";
import { getAllPostsAction, getPostsTags, getPostsByCategory } from "../../Actions/postAction";
import { getCategoriesAction } from "../../Actions/categoryAction";
import { clearPostsAction } from "../../Actions/utilAction";
import PostListItem from "./postListItem";
import Sidebar from "../layouts/Sidebar/";
import Loader from "../../helpers/Loader";
import SidebarCategories from "../layouts/Sidebar/categoriesCard";
import SidebarTags from "../layouts/Sidebar/tagsSidebar";
import LoadMoreBtn from "../../helpers/Pagination/LoadMore";

class AllPosts extends Component {
	state ={
		page: 1,
		tags: null
	};

	componentDidMount(){
		const { page } = this.state;
		
		const { categoryId } = this.props.match.params;
		this.props.clearPostsAction();

		if(categoryId){
			this.props.getPostsByCategory(categoryId, page);
		}else {
			this.props.getAllPostsAction(page);
		}

		this.props.getCategoriesAction();
	}

	componentDidUpdate(prevProps, prevState){
		const { categoryId } = this.props.match.params;
		if(prevState.page !== this.state.page){
			
			if(categoryId){
				// this.props.clearPostsAction();
				this.props.getPostsByCategory(categoryId, this.state.page);
			} else {
				this.props.getAllPostsAction(this.state.page);
			}

		}
	}
	
	componentWillUnmount(){
		this.props.clearPostsAction();
	}

	updatePageCount = () =>{
		const { page } = this.state;

		return this.setState({page: page + 1});
	}

	render() {
		const { all, loading, hasMorePosts } = this.props.posts;
		let query = qs.parse(this.props.location.search);
		const { category } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title={ query.name || "All Posts"} />
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
											
											<LoadMoreBtn nextPage={this.updatePageCount} hasmoreposts={hasMorePosts} />
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
	getCategoriesAction,
	clearPostsAction,
	getPostsByCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);