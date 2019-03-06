import { SET_AUTHENTICATED_USER, GET_ERRORS } from "../Actions/types";
import _ from 'lodash';

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default function(state = initialState, action){
	switch(action.type){
		case SET_AUTHENTICATED_USER:
			return{
				...state,
				isAuthenticated: !_.isEmpty(action.payload),
				user: !_.isEmpty(action.payload) ? action.payload : {}
			}
		default:
			return state;
	}
};