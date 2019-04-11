import { SET_AUTHENTICATED_USER, UPDATE_AUTH_USER } from "../Actions/types";
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
		case UPDATE_AUTH_USER:
			return{
				...state,
				user: {...state.user, ...action.payload}
			}
		default:
			return state;
	}
};