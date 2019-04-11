import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getAllPostsAction } from "../../Actions/postAction";
import PostListItem from "../post/postListItem";
import Loader from "../../helpers/Loader";

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {posts: []}
	}
	
	componentDidMount(){
		this.props.getAllPostsAction();
		this.setState({posts: [...this.props.posts.all]});
	}
	render() {
		const { all: posts, loading } = this.props.posts;
		const postsz = posts && posts.splice(0,5);
		
		return (
			<main id="content_wrapper" className="dashboard">
		  	<div className="jumbotron bg-color_black bg-img_dashboard">
					<div className="dashboard_next-game">
						<h2>Next Match Starts In...</h2>
						<p className="dashboard_countdown">
							<span className="match_hr">24hr</span>:
							<span className="match_min">12min</span>:
							<span className="match_sec">33sec</span>
						</p>
						<p className="dashboard_match-teams">
							<span className="team1">Manchester</span> vs 
							<span className="team2">Chelsea</span>
						</p>
					</div>
		  	</div>

		  	<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="posts-wrapper">
									<Fragment>
										<ul className="posts-list">
											<PostListItem allPosts={postsz} loading={loading} />
										</ul>
										
										<p className="text-center" style={{marginTop: "2rem"}}>
											<a href="#" className="btn btn-danger">Load More</a>
										</p>
									</Fragment>
							</div>
						</div>
					</div>
		  	</div>
			</main>
		)
	}
};

const mapStateToProps = (state) =>({
	posts: state.posts
});

const mapDispatchToProps = {
	getAllPostsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);