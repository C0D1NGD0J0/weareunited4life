import React, { Component } from 'react';
// import { connect } from "react-redux";
import Header from "../layouts/pageHeader";
// import Sidebar from "../layouts/Sidebar/";
// import SidebarTags from "../layouts/Sidebar/tagsSidebar";
// import Loader from "../../helpers/Loader";
import { Redirect } from "react-router";
import { getTagPosts } from "../../Actions/postAction";
import PostListItem from "../post/postListItem";

class Tags extends Component {
	state = {
		pageTitle: null,
		tag: this.props.match.params.tag,
		tagPosts: [],
		loading: false
	};

	componentDidMount(){
		const { match: { params: { tag } } } = this.props;
		if(!tag){
			return <Redirect to="/posts" />
		};

		this.setState({pageTitle: tag});
		getTagPosts(tag).then((posts) =>{
			this.setState({ tagPosts: [...posts] });
		}).catch((err) =>{
			console.log(err);
		});
	}

	// TODO: update component to reflect new tag selected
	// componentDidUpdate(prevProp, prevState){
	// 	console.log("P: ", prevProp)
	// 	console.log("S: ", prevState)
	// }

	render() {
		const { loading, tagPosts, pageTitle } = this.state;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title={`Posts Tags (${pageTitle})`} />
				<section id="posts" className="posts">
					<div className="container">
						<div className="row">
							<div className="col-sm-9 col-sm-offset-2">
								<div className="posts-wrapper">
									<ul className="posts-list">
										<PostListItem allPosts={tagPosts} loading={loading}/>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
};

export default Tags;