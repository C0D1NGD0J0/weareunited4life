import React, { Component } from 'react';
import Header from "../layouts/pageHeader";
import ContactList from "./contactList";
import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/";
import socketIOClient from "socket.io-client";
import MessagesList from "./messageList";
import MessageForm from "./messageForm";

class Messages extends Component {
	constructor(props){
		super(props);
		this.socket = socketIOClient('http://localhost:5000');
	}

	componentDidMount(){
		// this.socket.on('MESSAGE_ADDED', (msg) => {
		// 	this.props.updateMessageAction(msg);
		// });
	};

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
										<Sidebar>
											<ContactList title="Contact List"/>
										</Sidebar>
									</ul>
								</div>
							</div>

							<div className="col-sm-9">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h3 className="panel-title">Conversation with USERNAME</h3>
									</div>

									<MessageForm />
								</div>
								
								<MessagesList />
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}


export default Messages;