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
import { getCurrentUserAction } from "../../Actions/userAction";
import { clearCurrentUser } from "../../Actions/utilAction";

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.getCurrentUserAction();
	}

	componentWillUnmount(){
		this.props.clearCurrentUser()
	}

	render() {
		const { info: user, loading } = this.props.currentuser;

		return (
			<Fragment>
				<Header title="Welcome Username" />

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
											<ProfileSettingPanel user={user} />
				        			<UserPostsPanel />
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
	currentuser: state.currentuser	
});

const mapDispatchToProps = {
	getCurrentUserAction,
	clearCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);