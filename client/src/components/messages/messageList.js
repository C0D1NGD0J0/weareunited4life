import React from 'react';
import classnames from "classnames";
import Moment from "react-moment";

const isSender = (userId, msg) =>{
	// console.log(userId, msg.sender);
	if(userId && userId === msg.sender._id.toString()) return true;

	return false;
};

const MessagesList = ({ currentuserId, messages }) => {
	const displayMsg = messages && messages.map((msg, i) =>{
		return (
			<li className={classnames('clearfix msg-wrapper', {sender: isSender(currentuserId, msg), receiver: !isSender(currentuserId, msg)})} key={i}>
				<span className='clearfix'>
					<small className='pull-right'><Moment fromNow>{msg.createdAt}</Moment></small>
				</span>
				<p className="chat_text">{msg.text}</p>
			</li>
		);
	});

  return (
    <div className="panel messages">
			<div className="panel-body">
				<ul className="messages_list">
					{messages.length > 0 ? displayMsg : <h1 className='page-header text-center'>Select a Contact to Message</h1>}
				</ul>
			</div>
		</div>
  );
};


export default MessagesList;