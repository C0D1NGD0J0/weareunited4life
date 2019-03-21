import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import axios from "axios";
import { clearStateErrors } from "../../Actions/utilAction";
import { createNewPostAction, getCurrentPost, updatePostAction, uploadPhotosAction } from "../../Actions/postAction";
import { getCategoriesAction } from "../../Actions/categoryAction";
import TextAreaField from "../../helpers/FormElements/TextAreaField";
import CheckBoxField from "../../helpers/FormElements/CheckBoxField";
import SelectTagField from "../../helpers/FormElements/SelectTagField";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";
import Sidebar from "../layouts/Sidebar/";
import SidebarCategories from "../layouts/Sidebar/categoriesCard";
import SidebarPostPhotos from "../layouts/Sidebar/postPhotos";

const initialState = {
	title: "",
	body: "",
	tags: "",
	photos: [],
	selectedFiles: null,
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
			console.log(postdata);
			return this.props.updatePostAction(postid, postdata);
		};

		this.props.createNewPostAction(postdata, this.props.history);
	}
	
	toggleCheckbox = (e) =>{
		this.setState({[e.target.name]: !this.state[e.target.name]});
	}

	handleSelectTag = (e) =>{
		this.setState({[e.target.name]: e.target.value})
	}

	uploadImageHandler = (e) =>{
		if(this._validateFileSize(e)){
			this.setState({selectedFiles: e.target.files});
		};
	}

	uploadImage = async (e) =>{
		const { selectedFiles } = this.state;
		const data = new FormData();
		
		// loop of photo files and append to FormData
		for(let i = 0; i < selectedFiles.length; i++){
			data.append("photos", selectedFiles[i]);
		};
		
		// send formdata to upload route(s3)
		const photos = await uploadPhotosAction(data);
		// set state with returned array of objects from S3
		this.setState({photos: [...photos, ...this.state.photos], selectedFiles: null});
	}

	_validateFileSize=(e)=>{
  	const files = e.target.files;
  	const MAXSIZE = 1000000 * 5;
  	let total = 0;
		let error = "";

  	for(let i = 0; i < files.length; i++){
			total += files[i].size;
  	};

  	if(total > MAXSIZE){
  		error += "Your files are too large, total max size allowed 5MB";
  		e.target.value = null;
  		console.log(error);
  		return false;
  	}

  	return true;
	}

	resetState = () =>{
		this.setState(initialState);
	}

	render() {
		const { errors, category, posts } = this.props;
		const isPhotoPresent =  (this.state.selectedFiles !== null && this.state.selectedFiles.length > 0) ? true : false;
		const { all: categories } = category;
		const { show: post } = posts;
		
		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title={post.title ? "Update Post" : "Create New Post"} />

				<section id="newPost">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<Sidebar category={category && category} post={post && post.photos}>
									<SidebarPostPhotos />
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

											<div className="col-sm-6">
												<div className="form-group">
												  <span className="btn btn-default btn-file">
												    <i className="fa fa-cloud-upload" aria-hidden="true"></i> Select Photos
												    <input type="file" name="photos" multiple onChange={this.uploadImageHandler} />
												  </span>
													{isPhotoPresent ? <span className="btn btn-danger" onClick={this.uploadImage}>Upload</span> : ""}
													<p>{this.state.selectedFiles ? this.state.selectedFiles.length : 0} Files Selected.</p>
												</div>
											</div>
										</div>
										
										<fieldset disabled={this.state.selectedFiles ? "disabled" : false}>
											<InputSubmitBtn value={post.title ? "Update" : "Submit"} btnclass="btn-danger btn-block" />
										</fieldset>
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