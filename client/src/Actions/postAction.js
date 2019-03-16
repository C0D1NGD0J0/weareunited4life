import { GET_ERRORS, GET_POSTS, CREATE_NEW_POST, GET_CURRENT_POST, CLEAR_CURRENT_POST } from "./types";
import { setLoadingState } from "./utilAction";
import jwt_decode from "jwt-decode";
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
		return history.push("/posts");
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