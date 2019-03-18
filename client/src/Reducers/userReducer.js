import { GET_CURRENT_USER, LOADING, CLEAR_CURRENT_USER } from "../Actions/types";

const initialState = {
	info: {},
	posts: [],
	loading: false
};

export default function(state = initialState, action){
	switch(action.type){
		case LOADING:
			return{
				...state, 
				loading: true
			};
		case GET_CURRENT_USER:
			return{
				...state,
				info: action.payload.user,
				posts:[...action.payload.posts, ...state.posts],
				loading: false
			}
		case CLEAR_CURRENT_USER:
			return{
				...state,
				info: action.payload
			}
		default:
			return state;
	}
};