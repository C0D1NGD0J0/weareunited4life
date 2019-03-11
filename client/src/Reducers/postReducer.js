import { GET_POSTS, LOADING } from "../Actions/types";

const initialState = {
	show: {},
	all: [],
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
				all: [...state.all, ...action.payload],
				loading: false
			}
		default:
			return state;
	}
};