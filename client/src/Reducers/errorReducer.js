import { CLEAR_ERRORS, GET_ERRORS } from "../Actions/types";

const initialState = {};

export default function(state = initialState, action){
	switch(action.type){
		case GET_ERRORS: 
			return action.payload;
		case CLEAR_ERRORS:
			return action.payload;
		default:
			return state;
	}
};