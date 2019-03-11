import React from 'react';

const Dashboard = ({ className }) => {
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
							<ul className="posts-list">
								<li className="posts-list-item clearfix">
									<div>
										<a href="post.html" className="posts-list-item__link">
											<h2 className="posts-list-item__title"><i className="fa fa-star"></i> Post Title Goes Here</h2>
										</a>
										<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam facilis fugit distinctio ipsum tempore similique fuga est repudiandae officiis.</p>
									</div>
									<div className="posts-meta pull-right">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-commenting-o"></i> Comment</a><span className="badge">14</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-up"></i> Like</a><span className="badge">3</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-down"></i> Unlike</a><span className="badge">6</span></li>
											<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
										</ul>
									</div>
									<div className="posts-meta pull-left">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-user-o"></i> James Blunt</a></li>
											<li><a href="#"><i className="fa fa-calender-o"></i> 2hrs ago</a></li>
										</ul>
									</div>
								</li>

								<li className="posts-list-item clearfix">
									<div>
										<a href="post.html" className="posts-list-item__link">
											<h2 className="posts-list-item__title">Post Title Goes Here</h2>
										</a>
										<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam facilis fugit distinctio ipsum tempore similique fuga est repudiandae officiis.</p>
									</div>
									<div className="posts-meta pull-right">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-commenting-o"></i> Comment</a><span className="badge">14</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-up"></i> Like</a><span className="badge">3</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-down"></i> Unlike</a><span className="badge">6</span></li>
											<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
										</ul>
									</div>
									<div className="posts-meta pull-left">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-user-o"></i> James Blunt</a></li>
											<li><a href="#"><i className="fa fa-calender-o"></i> 2hrs ago</a></li>
										</ul>
									</div>
								</li>

								<li className="posts-list-item clearfix">
									<div>
										<a href="post.html" className="posts-list-item__link">
											<h2 className="posts-list-item__title">Post Title Goes Here</h2>
										</a>
										<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam facilis fugit distinctio ipsum tempore similique fuga est repudiandae officiis.</p>
									</div>
									<div className="posts-meta pull-right">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-commenting-o"></i> Comment</a><span className="badge">14</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-up"></i> Like</a><span className="badge">3</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-down"></i> Unlike</a><span className="badge">6</span></li>
											<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
										</ul>
									</div>
									<div className="posts-meta pull-left">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-user-o"></i> James Blunt</a></li>
											<li><a href="#"><i className="fa fa-calender-o"></i> 2hrs ago</a></li>
										</ul>
									</div>
								</li>

								<li className="posts-list-item clearfix">
									<div>
										<a href="post.html" className="posts-list-item__link">
											<h2 className="posts-list-item__title"><i className="fa fa-star"></i> Post Title Goes Here</h2>
										</a>
										<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam facilis fugit distinctio ipsum tempore similique fuga est repudiandae officiis.</p>
									</div>
									<div className="posts-meta pull-right">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-commenting-o"></i> Comment</a><span className="badge">14</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-up"></i> Like</a><span className="badge">3</span></li>
											<li><a href="#"><i className="fa fa-thumbs-o-down"></i> Unlike</a><span className="badge">6</span></li>
											<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
										</ul>
									</div>
									<div className="posts-meta pull-left">
										<ul className="list-inline post-actions">
											<li><a href="#"><i className="fa fa-user-o"></i> James Blunt</a></li>
											<li><a href="#"><i className="fa fa-calender-o"></i> 2hrs ago</a></li>
										</ul>
									</div>
								</li>
							</ul>
							
							<p className="text-center" style={{marginTop: "2rem"}}>
								<a href="#" className="btn btn-danger">Load More</a>
							</p>
						</div>
					</div>
				</div>
	  	</div>
		</main>
  );
};

export default Dashboard;