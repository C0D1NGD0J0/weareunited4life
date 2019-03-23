import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import Loader from "../../helpers/Loader";
import PropTypes from "prop-types";
import Header from "../layouts/pageHeader";
import Sidebar from "./profileSidebar";
import Followers from "./followersSidebar";
import UserPostsPanel from "./postsPanel";
import ProfileSettingPanel from "./settingPanel";
import UserContributionPanel from "./contributionPanel";
import { getCurrentUserAction, updateUserAction } from "../../Actions/userAction";
import { clearCurrentUser } from "../../Actions/utilAction";
import { deleteUserPostAction } from "../../Actions/postAction";

class Profile extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getCurrentUserAction();
	}

	componentWillUnmount(){
		this.props.clearCurrentUser();
	}

	handleUpdateUserForm = (e, userdata) =>{
		e.preventDefault();
		return this.props.updateUserAction(userdata);
	}

	handleDeletePost = (postid) =>{
		let response = window.confirm("Are you sure you want to delete this post?..");
		if(response){
			return this.props.deleteUserPostAction(postid);
		};
	}

	render() {
		const { info: user, loading, posts } = this.props.currentuser;
		const { errors } = this.props;

		return (
			<Fragment>
				<Header title={"Welcome "+user.username} />

				<main id="content_wrapper" className="bg-img_post" style={{paddingTop: 2+"rem"}}>
					<section id="profile-page" className="profile-page">
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-2">
									<Sidebar user={user}/>
								</div>

								<div className="col-sm-8">
									{(_.isEmpty(user) || loading) ? <Loader /> :
										<Fragment>
											<ProfileSettingPanel 
												user={user}
												errors={errors}
												updateUser={this.handleUpdateUserForm}
											/>
				        			<UserPostsPanel posts={posts} deletePost={this.handleDeletePost}/>
				        			<UserContributionPanel />
			        			</Fragment>
			        		}
								</div>

								<div className="col-sm-2">
									<Followers />
								</div>
							</div>
						</div>
					</section>
				</main>
			</Fragment>
		);
	}
};

const mapStateToProps = (state) =>({
	errors: state.errors,
	currentuser: state.currentuser	
});

const mapDispatchToProps = {
	getCurrentUserAction,
	updateUserAction,
	clearCurrentUser,
	deleteUserPostAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);