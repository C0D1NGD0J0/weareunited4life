import { GET_CURRENT_USER, GET_USER_POSTS, LOADING, DELETE_USER_POST, CLEAR_CURRENT_USER, UPDATE_CURRENT_USER, GET_USER_POSTS_FEED } from "../Actions/types";

const initialState = {
	info: {},
	posts: [],
	feed: [],
	comments: [],
	loading: false,
	postPagination: null,
	feedPagination: null
};

export default function(state = initialState, action){
	switch(action.type){
		case LOADING:
			return{
				...state, 
				loading: true
			};
		case GET_USER_POSTS_FEED:
			return{
				...state,
				feed: [...action.payload.feeds],
				feedPagination: action.payload.pagination
			}
		case GET_CURRENT_USER:
			return{
				...state,
				info: action.payload.user,
				posts:[...action.payload.posts, ...state.posts],
				comments: [...action.payload.comments, ...state.comments],
				loading: false,
				postPagination: action.payload.pagination
			}
		case GET_USER_POSTS:
			return{
				...state,
				loading: false,
				postPagination: action.payload.pagination,
				posts:[...action.payload.posts]
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