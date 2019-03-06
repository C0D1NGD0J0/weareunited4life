import { REGISTER_USER, LOGIN_USER, GET_ERRORS, SET_AUTHENTICATED_USER } from "./types";
import setHeaderAuthToken from "../helpers/setHeaderAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const registerAction = (userdata, history) => (dispatch) =>{
	axios.post("/api/auth/signup", userdata)
		.then((res) => window.location.reload())
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}));
};

export const loginAction = (userdata) => (dispatch) =>{
	axios.post('/api/auth/login', userdata)
		.then((res) =>{
			const { token } = res.data;
			localStorage.setItem('jwtToken', token); //save in localstorage
			setHeaderAuthToken(token); //set token in header for subsequent request
			const decodedToken = jwt_decode(token); //decode jwt-token
			dispatch(setAuthenticatedUser(decodedToken)); //confirm user credentials
		}).catch((err) => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}));
};

export const setAuthenticatedUser = (token) =>{
	return{
		type: SET_AUTHENTICATED_USER,
		payload: token
	};
};