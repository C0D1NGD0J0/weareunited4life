import { GET_CURRENT_USER, LOADING, DELETE_USER_POST, CLEAR_CURRENT_USER, UPDATE_CURRENT_USER } from "../Actions/types";

const initialState = {
	info: {},
	posts: [],
	comments: [],
	loading: false,
	pagination: null
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
				comments: [...action.payload.comments, ...state.comments],
				loading: false,
				pagination: action.payload.pagination
			}
		case CLEAR_CURRENT_USER:
			return{
				...state,
				info: action.payload,
				posts: [],
				comments: [],
				loading: false
			}
		case UPDATE_CURRENT_USER:
			return{
				...state,
				info: action.payload
			}
		case DELETE_USER_POST:
			return{
				...state,
				posts: state.posts.filter(post => post._id !== action.payload)
			}
		default:
			return state;
	}
};