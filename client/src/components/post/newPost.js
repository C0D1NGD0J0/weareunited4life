import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import { connect } from "react-redux";
import axios from "axios";
import { createNewPostAction } from "../../Actions/postAction";
import TextAreaField from "../../helpers/FormElements/TextAreaField";
import CheckBoxField from "../../helpers/FormElements/CheckBoxField";
import SelectTagField from "../../helpers/FormElements/SelectTagField";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class newPost extends Component {
	constructor(props){
		super(props);
		this.state = {
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
			category: "",
			categories: []
		};
		this.POST_TYPES = ["article", "matchday"];
	}
	
	componentDidMount(){
		axios.get("/api/categories/").then((res) =>{
			const categoriesArr = convertArrOfObj(res.data);
			return this.setState({categories: categoriesArr});
		}).catch((err) =>{
			// this.setState({errors: err.response.data});
			console.log(err);
		});
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const post = {...this.state};
		this.props.createNewPostAction(post, this.props.history);
	}
	
	toggleCheckbox = (e) =>{
		this.setState({[e.target.name]: !this.state[e.target.name]});
	}

	handleSelectTag = (e) =>{
		this.setState({[e.target.name]: e.target.val})
	}

	render() {
		const { errors } = this.props;

		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="Create New Post" />

				<section id="newPost">
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
												<SelectTagField label="Category" options={this.state.categories} name="category"/>
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
										
										<InputSubmitBtn value="Submit" btnclass="btn-danger btn-block" />
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
	posts: state.posts
});

const mapDispatchToProps = {
	createNewPostAction
};

function convertArrOfObj(arr){
	const newArr = [];
	for(let item of arr){
		newArr.push(item.name);
	};

	return newArr;
};

export default connect(mapStateToProps, mapDispatchToProps)(newPost);