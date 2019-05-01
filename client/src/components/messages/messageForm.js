import React from 'react';

const MessageForm = ({ onChange, onFormSubmit, value }) => {
  return (
    <div className="panel-body">
			<form className="form message_form" onSubmit={onFormSubmit}>
				<div className="form-group message_input">
					<textarea 
						className="form-control" 
						placeholder="Enter message...." 
						value={value} 
						onChange={onChange}
					/>
				</div>

				<input type="submit" value="Send Message" className="btn btn-danger" style={{padding: "1rem 4rem", fontSize: "1.5rem"}}/>
			</form>
		</div>  
  );
};


export default MessageForm;