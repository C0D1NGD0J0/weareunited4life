import { CLEAR_ERRORS } from "./types";

export const clearStateErrors = () =>{
	return{
		type: CLEAR_ERRORS,
		payload: {}
	};
};