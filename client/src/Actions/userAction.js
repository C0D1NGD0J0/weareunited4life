import axios from "axios";
import { setLoadingState } from "./utilAction";
import { GET_CURRENT_USER, GET_ERRORS } from "./types";

export const getCurrentUserAction = () => (dispatch)=>{
	dispatch(setLoadingState());
	axios.get("/api/users/currentuser").then((res) =>{
		dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	})
};