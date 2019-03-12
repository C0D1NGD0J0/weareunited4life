import React, { Component } from 'react';
import Header from "../layouts/pageHeader";

class newPost extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<main id="content_wrapper" className="bg-img_posts">
				<Header title="Create New Post" />
				
				<section id="posts" className="posts">
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
								
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default newPost;