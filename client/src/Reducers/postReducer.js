import { GET_POSTS, LOADING, CREATE_NEW_POST, GET_CURRENT_POST, CLEAR_CURRENT_POST, UPDATE_CURRENT_POST, CLEAR_POSTS } from "../Actions/types";

const initialState = {
	show: {},
	all: [],
	hasMorePosts: false,
	loading: false
};

export default function(state = initialState, action){
	switch(action.type){
		case LOADING:
			return{
				...state, 
				loading: true
			};
		case GET_POSTS:
			return{
				...state,
				all: [...state.all, ...action.payload.posts],
				hasMorePosts: action.payload.hasMorePosts,
				loading: false
			}
		case CREATE_NEW_POST:
			return{
				...state,
				all: [action.payload, ...state.all],
				loading: false
			}
		case GET_CURRENT_POST:
			return{
				...state,
				loading: false,
				show: {...action.payload}
			}
		
		case UPDATE_CURRENT_POST:
			if(state.show && state.show._id === action.payload._id){
				return {
					...state,
					show: {...action.payload}
				}
			}
			return state;

		case CLEAR_CURRENT_POST:
			return{
				...state,
				show: {...action.payload}
			}
		case CLEAR_POSTS:
			return{
				...state,
				all: [],
				hasMorePosts: false,
				loading: false
			}
		default:
			return state;
	}
};