		import React, { Component } from 'react';
		import Header from "../layouts/pageHeader";
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
					allowComment: false,
					isMatch: false,
					scores: "",
					homeTeam: "",
					awayTeam: "",
					date: "",
					competition: "",
					postType: ""
				};
			}

			onFormInputChange = (e) =>{
				this.setState({[e.target.name]: e.target.value});
			}

			onFormSubmit = (e) =>{
				e.preventDefault();
				const post = {...this.state};
				return console.log(post);
			}
			
			toggleCheckbox = (e) =>{
				this.setState({[e.target.name]: !this.state[e.target.name]});
			}

			render() {
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
										<div className="panel panel-default">
											<div className="panel-body newpost">
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
					                      error=""
					                      isDisabled={false}
					                    />
														</div>

														<div className="col-sm-6">
															<SelectTagField label="Select Category" />
														</div>

														<div className="col-sm-6">
															<SelectTagField label="Post Type" />
														</div>

														<div className="col-sm-3">
															<CheckBoxField 
																name="allowComment"
																label="Allow Comment"
																checked={this.state.allowComment}
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
													</div><hr/>
													
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
						                      error=""
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
						                      error=""
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
						                      error=""
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
						                      error=""
						                      isDisabled={false}
						                    />
															</div>
														</div> : ""
													}

													<div className="row">
														<div className="col-sm-12">
															<TextAreaField />
														</div>
													</div>
													
													<InputSubmitBtn value="Submit" btnclass="btn-danger btn-block" />
				                </form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
				);
			}
		}

		export default newPost;