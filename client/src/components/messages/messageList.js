import React from 'react';
import classnames from "classnames";

const isSender = (userId, msg) =>{
	if(userId && userId.toString() === msg.sender._id.toString()) return true;

	return false;
};

const MessagesList = ({ currentuserId, messages }) => {
	const displayMsg = messages && messages.map((msg, i) =>{
		return (
			<li className={classnames("messages_list-item", {sender: isSender(currentuserId, msg)})} key={i}>
				<p className='clearfix'><small className='pull-right'>12/04/2019</small></p>
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