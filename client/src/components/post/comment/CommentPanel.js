import React, { Component } from 'react';
import { connect } from "react-redux";
import CommentListItem from "./commentsList";
import { Link } from "react-router-dom";
import { deleteCommentsAction, addCommentAction, commentAddedAction } from "../../../Actions/postAction";
import TextAreaField from "../../../helpers/FormElements/TextAreaField";
import socketIOClient from "socket.io-client";

class CommentPanel extends Component {
	constructor(props){
		super(props);
		this.state = {
			comment: ""
		};

		this.socket = socketIOClient('http://localhost:5000');
	}

	componentDidMount(){
		this.socket.on('commentAdded', (post) => {
			this.props.commentAddedAction(post)
		});
	};
	
	onFormInputChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const { postid } = this.props;
		const comment = {
			comment: this.state.comment
		};

		this.props.addCommentAction(postid, comment);
		this.setState({comment: ""});
	}

	deleteComment = (commentid, postid) =>{
		this.props.deleteCommentsAction(commentid, postid)
	}

	render() {
		const { comments, postid, auth: { isAuthenticated, user } } = this.props;
		const { errors } = this.props;

		return (
			<div className="panel-body">
				<ul className="post-comments">
					<CommentListItem comments={comments} deleteComment={this.deleteComment} postid={postid} currentuser={user}/>
				</ul>

				<div className="well">
					{ isAuthenticated ? 
						<form onSubmit={this.onFormSubmit} className="form clearfix">
							<TextAreaField 
								name="comment"
								row="2"
								label="Enter Comment"
								value={this.state.comment} 
								placeholder="Share your thoughts..." 
								onChange={this.onFormInputChange} 
								error={errors.comment}
							/>

							<div className="form-group pull-right">
								<div className="btn-group">
								  <button type="button" className="btn btn-default"><i className="fa fa-camera-retro"></i> Image</button>
								  <input type="submit" value="Submit" className="btn btn-danger"/>
								</div>
							</div>
						</form> :
						<h2 className="text-center text-uppercase">
							<Link to="/login">Login to Comment...</Link>&#128512;
						</h2>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>({
	auth: state.auth,
	errors: state.errors
});

const mapDispatchToProps = {
	addCommentAction, 
	deleteCommentsAction,
	commentAddedAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPanel);