import { GET_POSTS, LOADING, CREATE_NEW_POST, GET_CURRENT_POST } from "../Actions/types";

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
				all: action.payload,
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
		default:
			return state;
	}
};