import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import axios from "axios";
import { clearStateErrors } from "../../Actions/utilAction";
import { createNewPostAction, getCurrentPost, updatePostAction } from "../../Actions/postAction";
import { getCategoriesAction } from "../../Actions/categoryAction";
import TextAreaField from "../../helpers/FormElements/TextAreaField";
import CheckBoxField from "../../helpers/FormElements/CheckBoxField";
import SelectTagField from "../../helpers/FormElements/SelectTagField";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";
import Sidebar from "../layouts/Sidebar/";
import SidebarCategories from "../layouts/Sidebar/categoriesCard";

const initialState = {
	title: "",
	body: "",
	tags: "",
	photos: [],
	allowComments: false,
	isMatch: false,
	scores: "",
	homeTeam: "",
	awayTeam: "",
	date: "",
	competition: "",
	postType: "",
	category: ""
};

class newPost extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		this.POST_TYPES = ["article", "matchday"];
	}
	
	componentDidMount(){
		const postid = this.props.match.params.postId;
		if(postid){
			this.props.getCurrentPost(postid);
		};

		this.props.getCategoriesAction();
	}
	
	componentDidUpdate(prevProps, prevState){
		
		if(!this.state.title && this.props.posts.show.title && this.props.match.params.postId){
			this.setState({
				...this.props.posts.show, 
				category: this.props.posts.show.category._id,
				tags: this.props.posts.show.tags.join(" "),
				postType: this.props.posts.show.type
			})

		}
		if(prevProps.match.path !== this.props.match.path){
			return this.resetState();
		};
	}

	componentWillUnmount(){
		this.props.clearStateErrors();
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const postdata = {...this.state};
		const postid = this.props.match.params.postId;
		
		if(postid){
			return console.log(postdata);
			// return this.props.updatePostAction(postid, postdata)
		};

		this.props.createNewPostAction(postdata, this.props.history);
	}
	
	toggleCheckbox = (e) =>{
		this.setState({[e.target.name]: !this.state[e.target.name]});
	}

	handleSelectTag = (e) =>{
		this.setState({[e.target.name]: e.target.val})
	}

	resetState = () =>{
		this.setState(initialState);
	}

	render() {
		const { errors, category, posts } = this.props;
		const { all: categories } = category;
		const { show: post } = posts;
		
		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title={post.title ? "Update Post" : "Create New Post"} />

				<section id="newPost">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<Sidebar category={category && category}>
									<SidebarCategories />
								</Sidebar>
							</div>

							<div className="col-sm-9">
								<div className="newpost">
									<form className="form" onSubmit={this.onFormSubmit}>
										<div className="row">
											<div className="col-sm-12">
												<FormInputField
		                      label="Title"
		                      name="title"
		                      labelinfo="(required)"
		                      value={this.state.title}
		                      onChange={this.onFormInputChange}
		                      placeholder="Enter Post Title..."
		                      error={errors.title}
		                      isDisabled={false}
		                    />
											</div>

											<div className="col-sm-6">
												<SelectTagField 
													label="Category" 
													options={categories && categories} 
													name="category"
													value={this.state.category}
													onChange={this.handleSelectTag}
												/>
											</div>

											<div className="col-sm-6">
												<SelectTagField 
													label="Post Type" 
													options={this.POST_TYPES} 
													name="postType" 
													value={this.state.postType} 
													onChange={this.handleSelectTag}
												/>
											</div>

											<div className="col-sm-3">
												<CheckBoxField 
													name="allowComments"
													label="Allow Comment"
													checked={this.state.allowComments}
													handleCheckedBox={this.toggleCheckbox}
												/>
											</div>

											<div className="col-sm-3">
												<CheckBoxField
													name="isMatch"
													label="Match Day Post" 
													checked={this.state.isMatch}
													handleCheckedBox={this.toggleCheckbox}
												/>
											</div>
										</div>
										
										{this.state.isMatch ? 
											<div className="row">
												<div className="col-sm-6">
													<FormInputField
			                      label="Home Team"
			                      name="homeTeam"
			                      labelinfo="(required)"
			                      value={this.state.homeTeam}
			                      onChange={this.onFormInputChange}
			                      placeholder="Home Team"
			                      error={errors.homeTeam}
			                      isDisabled={false}
			                    />
												</div>

												<div className="col-sm-6">
													<FormInputField
			                      label="Away Team"
			                      name="awayTeam"
			                      labelinfo="(required)"
			                      value={this.state.awayTeam}
			                      onChange={this.onFormInputChange}
			                      placeholder="Away Team"
			                      error={errors.awayTeam}
			                      isDisabled={false}
			                    />
												</div>

												<div className="col-sm-6">
													<FormInputField
			                      label="competition"
			                      name="competition"
			                      labelinfo="(required)"
			                      value={this.state.competition}
			                      onChange={this.onFormInputChange}
			                      placeholder="Enter Competition Name..."
			                      error={errors.competition}
			                      isDisabled={false}
			                    />
												</div>

												<div className="col-sm-6">
													<FormInputField
			                      label="scores"
			                      name="scores"
			                      labelinfo="(required)"
			                      value={this.state.scores}
			                      onChange={this.onFormInputChange}
			                      placeholder="Enter Final Score: 2 - 0"
			                      error={errors.scores}
			                      isDisabled={false}
			                    />
												</div>
											</div> : ""
										}

										<div className="row">
											<div className="col-sm-12">
												<TextAreaField 
													name="body"
													label="Body"
													value={this.state.body} 
													placeholder="Enter post text" 
													onChange={this.onFormInputChange} 
													error={errors.body}
												/>
											</div>

											<div className="col-sm-12">
												<FormInputField
		                      label="#Tags"
		                      name="tags"
		                      labelinfo="(required)"
		                      value={this.state.tags}
		                      onChange={this.onFormInputChange}
		                      placeholder="Seperate each word with space... tag1 tag2"
		                      error={errors.tags}
		                      isDisabled={false}
		                    />
											</div>
										</div>
										
										<InputSubmitBtn value={post.title ? "Update" : "Submit"} btnclass="btn-danger btn-block" />
	                </form>
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
	auth: state.auth,
	errors: state.errors,
	posts: state.posts,
	category: state.category
});

const mapDispatchToProps = {
	createNewPostAction,
	getCurrentPost,
	getCategoriesAction,
	clearStateErrors,
	updatePostAction
};

export default connect(mapStateToProps, mapDispatchToProps)(newPost);