import React from 'react';
import classnames from "classnames";

const isSender = (userId, msg) =>{
	if(userId && userId.toString() === msg.sender._id.toString()) return true;

	return false;
};

const MessagesList = ({ currentuserId, messages }) => {
	const displayMsg = messages && messages.map((msg, i) =>{
		return (
			<li className="messages_list-item clearfix" key={i}>
				<div className={classnames({sender: isSender(currentuserId, msg)})}>
					<p className='clearfix'><small className='pull-right'>{msg.createdAt}</small></p>
					<p className="chat_text">{msg.text}</p>
				</div>
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