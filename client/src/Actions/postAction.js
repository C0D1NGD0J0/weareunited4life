import { GET_ERRORS, GET_POSTS, DELETE_USER_POST, CREATE_NEW_POST, GET_CURRENT_POST, UPDATE_CURRENT_POST } from "./types";
import { setLoadingState } from "./utilAction";
import axios from "axios";

export const getAllPostsAction = () => (dispatch) =>{
	dispatch(setLoadingState());
	axios.get("/api/posts/").then((res) =>{
		return dispatch({
			type: GET_POSTS,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const createNewPostAction = (postdata, history) => (dispatch) =>{
	dispatch(setLoadingState());
	axios.post("/api/posts/", postdata).then((res) =>{
		dispatch({
			type: CREATE_NEW_POST,
			payload: res.data
		});
		return history.push(`/posts/${res.data.post._id}`);
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const getCurrentPost = (postid) => (dispatch) =>{
	dispatch(setLoadingState());
	axios.get(`/api/posts/${postid}`).then((res) =>{
		return dispatch({
			type: GET_CURRENT_POST,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const likePostAction = (postid) => (dispatch) =>{
	axios.put(`/api/posts/${postid}/like`).then((res) =>{
		dispatch({type: GET_CURRENT_POST, payload: res.data });
	}).catch((err) =>{
		dispatch({type: GET_ERRORS, payload: err.response.data });
	});
};

export const unlikePostAction = (postid) => (dispatch) =>{
	axios.put(`/api/posts/${postid}/unlike`).then((res) =>{
		dispatch({type: GET_CURRENT_POST, payload: res.data });
	}).catch((err) =>{
		dispatch({type: GET_ERRORS, payload: err.response.data });
	});
};

export const updatePostAction = (postid, postdata) => (dispatch) =>{
	dispatch(setLoadingState());
	axios.put(`/api/posts/${postid}`, postdata).then((res) =>{
		return dispatch({
			type: GET_CURRENT_POST,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const deleteUserPostAction = (postid) => (dispatch) =>{
	axios.delete(`/api/posts/${postid}`).then((res) =>{
		return dispatch({
			type: DELETE_USER_POST,
			payload: postid
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const addCommentAction = (postid, commentData) => (dispatch) =>{
	dispatch(setLoadingState());
	axios.post(`/api/posts/${postid}/comments`, commentData).then((res) =>{
		dispatch({
			type: GET_CURRENT_POST,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const updatePostCommentAction = (post) => (dispatch) => {
	return dispatch({
		type: UPDATE_CURRENT_POST,
		payload: post
	});
}

export const deleteCommentsAction = (postid, commentid) => (dispatch) =>{
	dispatch(setLoadingState());
	axios.delete(`/api/posts/${postid}/comments/${commentid}`).then((res) =>{
		dispatch({
			type: GET_CURRENT_POST,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const getTags = async () =>{
	const errors = {};
	try {
		let res = await axios.get("/api/posts/tags");
		let tags = await res.data;
		return tags;
	} catch(e) {
		errors.msg = e.msg;
		return errors;
	};
};

export const getTagPosts = async (tag) =>{
	try {
		let res = await axios.get(`/api/posts/tags/${tag}`);
		let posts = await res.data;
		return posts;
	} catch(e) {
		return e.msg;
	};
};