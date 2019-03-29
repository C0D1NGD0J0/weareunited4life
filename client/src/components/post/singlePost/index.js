import React, { Component } from 'react';
import Header from "../../layouts/pageHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  { Link } from "react-router-dom";
import PostMeta from "./postMeta";
import CommentPanel from "../comment/CommentPanel";
import Sidebar from "../../layouts/Sidebar/";
import SidebarUser from "../../layouts/Sidebar/userDetails";
import SidebarPostPhotos from "../../layouts/Sidebar/postPhotos";
import { clearStateErrors, clearCurrentPost } from "../../../Actions/utilAction";
import { getCurrentPost, likePostAction, unlikePostAction } from "../../../Actions/postAction";

class Post extends Component {
	constructor(props){
		super(props);
		this.state ={
			errors: {}
		};
	}

	componentDidMount(){
		const { postId } = this.props.match.params;
		if(postId){
			this.props.getCurrentPost(postId);
		};
	}

	componentDidUpdate(){

	}

	componentWillUnmount(){
		this.props.clearCurrentPost();
		this.props.clearStateErrors();
	}

	handleLikePost = (e, postid) =>{
		e.preventDefault();
		return this.props.likePostAction(postid);
	}
	
	handleUnLikePost = (e, postid) =>{
		e.preventDefault();
		return this.props.unlikePostAction(postid);
	}

	render() {
		const post = this.props.posts;
		const { auth } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_post">
				<Header title={post.title} />
				<section id="post" className="post">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-2">
								<Sidebar user={post.author} post={post.photos}>
									<SidebarPostPhotos />
									<SidebarUser />
								</Sidebar>
							</div>

							<div className="col-sm-8">
								<div className="post-content">
									<div className="panel panel-default">
										<div className="panel-body">
											<div className="post-content__description">
												<p>{post.body}</p><hr/>
												<PostMeta post={post} likePost={this.handleLikePost} unlikePost={this.handleUnLikePost} currentuser={auth} />
											</div>
										</div>	
									</div>

									<div className="post_content-form">
										<div className="panel panel-default">
											<div className="panel-heading">
												<h3 className="panel-title">Leave your comments below..</h3>
											</div>

											{ post.allowComments ? 
												<CommentPanel comments={post.comments} postid={post._id} /> 
												: <h2 className='text-center'>Comments have been disabled!</h2>
											}
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-2">
								<div className="sidebar">
									<div className="sidebar_box">
										<div className="post_followers">
											<h4 className="text-center">Joined:</h4><hr/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state) =>({
	posts: state.posts.show,
	auth: state.auth
});

const mapDispatchToProps = {
	getCurrentPost,
	likePostAction,
	unlikePostAction,
	clearStateErrors,
	clearCurrentPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);