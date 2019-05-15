import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import PostListItem from "../post/postListItem";
import Loader from "../../helpers/Loader";
import axios from "axios";
import  Moment from "react-moment";
import { getAllPostsAction } from "../../Actions/postAction";
import LoadMoreBtn from "../../helpers/Pagination/LoadMore";

class Dashboard extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			page: 1,
			hasMorePosts: false,
			matchInfo: {}
		}
	}
	
	componentDidMount(){
		this.props.getAllPostsAction(this.state.page);
		axios.get("/api/gameinfo/").then((res) =>{
			this.setState({ matchInfo: {...res.data} });
		});
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.page !== this.state.page){
			this.props.getAllPostsAction(this.state.page);
		}
	}

	updatePageCount = () =>{
		const { page } = this.state;
		return this.setState({page: page + 1});
	}

	render() {
		const { all: posts, loading, hasMorePosts } = this.props.posts;
		const { matchInfo } = this.state;
		
		return (
			<main id="content_wrapper" className="dashboard">
		  	<div className="jumbotron bg-color_black bg-img_dashboard">
					<div className="dashboard_next-game">
						<h2>Next Match Starts In...</h2>
						<p className="dashboard_countdown">
							<Moment fromNow>{matchInfo.event_date}</Moment>
						</p>
						<p className="dashboard_match-teams">
							<span className="team1">{matchInfo && matchInfo.homeTeam}</span> vs  
							<span className="team2"> {matchInfo && matchInfo.awayTeam}</span>
						</p>
					</div>
		  	</div>

		  	<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="posts-wrapper">
									<Fragment>
										<ul className="posts-list">
											<PostListItem allPosts={posts} loading={loading} />
										</ul>
										
										<LoadMoreBtn nextPage={this.updatePageCount} hasmoreposts={hasMorePosts} />
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