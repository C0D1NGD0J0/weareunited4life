import React, { Component, Fragment } from 'react';
import Header from "../layouts/pageHeader";

class AllPosts extends Component {
	render() {
		return (
			<Fragment>
				<Header title="All Posts" />
				<main id="content_wrapper" className="bg-img_posts">
					<section id="posts" className="posts">
						<div className="contianer">
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
					</section>
				</main>
			</Fragment>
		);
	}
}

export default AllPosts;