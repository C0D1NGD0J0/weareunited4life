import axios from "axios";
import { setLoadingState } from "./utilAction";
import { GET_CURRENT_USER, GET_ERRORS, GET_USER_POSTS } from "./types";

export const getCurrentUserAction = () => (dispatch)=>{
	dispatch(setLoadingState());
	axios.get("/api/users/currentuser").then((res) =>{
		dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	})
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

export const followUserAction = (userid) =>{
	console.log(userid)
};