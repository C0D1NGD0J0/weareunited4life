import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import Followers from "../layouts/Sidebar/followersSidebar";
import { Link } from "react-router-dom";

class Messages extends Component {
	render() {
		return (
			<main id="content_wrapper" className="bg-img_post">
				<Header title="Private Messages" />
				<section id="messages">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<div className="contacts">
									<ul className="contacts_list">
										<Followers />
									</ul>
								</div>
							</div>

							<div className="col-sm-9">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h3 className="panel-title">Conversation with USERNAME</h3>
									</div>

									<div className="panel-body">
										<form className="form message_form">
											<div className="form-group message_input">
												<input type="text" className="form-control" placeholder="Enter message for..."/>
											</div>

											<input type="submit" value="Send Message" className="btn btn-danger" style={{padding: "1rem 4rem", fontSize: "1.5rem"}}/>
										</form>
									</div>
								</div>{/*panel-end*/}
								
								<div className="panel messages">
									<div className="panel-body">
										<ul className="messages_list">
											<li className="messages_list-item">
												<p className="chat_name clearfix">USERNAME <small className='pull-right'>12/04/2019</small></p>
												<p className="chat_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae, nesciunt ab aut nostrum, dignissimos sapiente ipsum fugiat harum dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores natus, quia. Maxime molestias fugit minus?</p>
											</li>

											<li className="messages_list-item sender">
												<p className='clearfix'><small className='pull-right'>12/04/2019</small></p>
												<p className="chat_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae, nesciunt ab aut nostrum, dignissimos sapiente ipsum fugiat harum dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores natus, quia. Maxime molestias fugit minus?</p>
											</li>
										</ul>
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


export default Messages;