import { GET_ERRORS, GET_POSTS } from "./types";
import { setLoadingState } from "./utilAction";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const getAllPostsAction = () => (dispatch) =>{
	dispatch(setLoadingState());
	axios.get("/api/posts/").then((res) =>{
		dispatch({
			type: GET_POSTS,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};
