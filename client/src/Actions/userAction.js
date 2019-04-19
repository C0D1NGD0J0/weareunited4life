import axios from "axios";
import { setAuthenticatedUser } from "./authAction";
import { setLoadingState, clearCurrentUser } from "./utilAction";
import { GET_CURRENT_USER, GET_ERRORS, GET_USER_POSTS, UPDATE_CURRENT_USER, UPDATE_AUTH_USER } from "./types";

export const getCurrentUserAction = (page) => (dispatch)=>{
	dispatch(setLoadingState());
	axios.get(`/api/users/currentuser/?page=${page}`).then((res) =>{
		dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const getCurrentUserPostsAction = (page) => async (dispatch)=>{
	await axios.get(`/api/users/currentuser/?posts_page=${page}`).then((res) =>{
		return dispatch({
			type: GET_USER_POSTS,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const updateUserAction = (userdata) => (dispatch) =>{
	axios.put(`/api/users/${userdata.id}`, userdata).then((res) =>{
		return dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		})
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const deleteUserAccountAction = (userid) => (dispatch) =>{
	axios.delete(`/api/users/${userid}`).then((res) =>{
		dispatch(clearCurrentUser());
		return dispatch(setAuthenticatedUser({}));
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const followUserAction = (followid) => (dispatch) =>{
	axios.put(`/api/users/${followid}/follow`).then((res) =>{
		dispatch({
			type: UPDATE_AUTH_USER,
			payload: res.data
		})

		return dispatch({
			type: UPDATE_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const unFollowUserAction = (followid) => (dispatch) =>{
	axios.put(`/api/users/${followid}/unfollow`).then((res) =>{
		dispatch({
			type: UPDATE_AUTH_USER,
			payload: res.data
		})
		
		return dispatch({
			type: UPDATE_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};