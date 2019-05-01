import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../layouts/pageHeader";
import ContactList from "./contactList";
import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/";
import socketIOClient from "socket.io-client";
import MessagesList from "./messageList";
import MessageForm from "./messageForm";
import axios from "axios";
import { getCurrentUserAction } from "../../Actions/userAction";

class Messages extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentuser: null,
			messages: [],
			text: "",
			errors: {},
			activeContact: null
		};
		this.socket = socketIOClient('http://localhost:5000');
	}

	componentDidMount(){
		this.props.getCurrentUserAction();
		// this.socket.on('MESSAGE_ADDED', (msg) => {
		// 	this.props.updateMessageAction(msg);
		// });
	};

	componentDidUpdate(prevProps){
		const currentContact = prevProps.match.params.receiverId;
		const nextContact = this.props.match.params.receiverId;

		if(currentContact !== nextContact && nextContact !== undefined){
			axios.get(`/api/users/${nextContact}/messages`).then((res) =>{
				this.setState({ messages: [...res.data], activeContact: res.data[0].sender.username });
			}).catch((err) =>{
				console.log(err);
			});
		};	
	}

	onFormInputChange = (e) =>{
		this.setState({text: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const { receiverId } = this.props.match.params;
		const message = {
			text: this.state.text
		};

		if(receiverId !== 'undefined' || receiverId !== ''){
			axios.post(`/api/users/${receiverId}/messages`, message).then((res) =>{
				return this.setState({
					messages: [...this.state.messages, res.data]
				});
			}).catch((err) =>{

			});
		};

		return this.setState({text: ""});
	}

	render() {
		const { info: currentuser } = this.props.currentuser;
		const { messages, activeContact } = this.state;
		
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
											<ContactList title="Contact List" contacts={currentuser.following}/>
										</Sidebar>
									</ul>
								</div>
							</div>

							<div className="col-sm-9">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h3 className="panel-title">Conversation with {activeContact}</h3>
									</div>

									<MessageForm onChange={this.onFormInputChange} onFormSubmit={this.onFormSubmit} value={this.state.text} />
								</div>
								
								<MessagesList currentuserId={currentuser._id} messages={messages} />
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) =>({
	currentuser: state.currentuser
});

const mapDispatchToProps = {
	getCurrentUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);