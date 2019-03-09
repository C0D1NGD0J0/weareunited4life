import { CLEAR_ERRORS, LOADING, CLEAR_CURRENT_USER } from "./types";

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
}

export const clearCurrentUser = () =>{
	return{
		type: CLEAR_CURRENT_USER,
		payload: {}
	};
}