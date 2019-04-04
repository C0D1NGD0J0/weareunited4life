import { GET_CATEGORIES, LOADING, ADD_NEW_CATEGORY } from "../Actions/types";

const initialState = {
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
		case GET_CATEGORIES: 
			return{
				...state,
				all: [...action.payload],
				loading: false
			};
		case ADD_NEW_CATEGORY:
			return{
				...state,
				all: [...state.all, action.payload],
				loading: false
			}
		default:
			return state;
	}
};