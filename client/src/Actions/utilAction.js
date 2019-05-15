import { CLEAR_ERRORS, LOADING, CLEAR_CURRENT_USER, CLEAR_CURRENT_POST, CLEAR_POSTS } from "./types";

export const clearStateErrors = () =>{
	return{
		type: CLEAR_ERRORS,
		payload: {}
	};
};

export const setLoadingState = () =>{
	return{
		type: LOADING
	};
};

export const clearCurrentUser = () =>{
	return{
		type: CLEAR_CURRENT_USER,
		payload: {}
	};
};

export const clearCurrentPost = () =>{
	return{
		type: CLEAR_CURRENT_POST,
		payload: null
	}
};

export const clearPostsAction = () =>{
	return{
		type: CLEAR_POSTS,
		payload: {}
	}
};