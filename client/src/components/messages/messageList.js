import React from 'react';

const MessagesList = ({ className }) => {
  return (
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
  );
};


export default MessagesList;