import { REGISTER_USER, LOGIN_USER, GET_ERRORS } from "./types";
import axios from "axios";

export const registerAction = (userdata, history) => (dispatch) =>{
	axios.post("/api/auth/signup", userdata)
		.then((res) => window.location.reload())
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}));
};

export const loginAction = (userdata) =>{

};