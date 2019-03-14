import { GET_ERRORS, SET_AUTHENTICATED_USER } from "./types";
import { clearCurrentUser, clearStateErrors } from "./utilAction";
import setHeaderAuthToken from "../helpers/setHeaderAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const registerAction = (userdata, history) => (dispatch) =>{
	axios.post("/api/auth/signup", userdata)
		.then((res) => history.push("/"))
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}));
};

export const loginAction = (userdata, history) => (dispatch) =>{
	axios.post('/api/auth/login', userdata)
		.then((res) =>{
			const { token } = res.data;
			localStorage.setItem('jwtToken', token); //save in localstorage
			setHeaderAuthToken(token); //set token in header for subsequent request
			const decodedToken = jwt_decode(token); //decode jwt-token
			dispatch(setAuthenticatedUser(decodedToken)); //confirm user credentials
			dispatch(clearStateErrors());
			return history.push(`/${decodedToken.username}/profile`);
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

export const logoutUserAction = (history) => (dispatch) =>{
	localStorage.removeItem('jwtToken');
	setHeaderAuthToken(false);
	dispatch(setAuthenticatedUser({}));
	dispatch(clearCurrentUser());
};

export const forgotPasswordAction = (userdata) => (dispatch) =>{
	axios.post("/api/auth/forgot_password", userdata).then((res) =>{
		return console.log(res);
	}).catch((err) => dispatch({
		type: GET_ERRORS,
		payload: err.response.data
	}));
};

export const resetPasswordAction = (userdata, token, history) => (dispatch) =>{
	axios.post(`/api/auth/reset_password/${token}`, userdata)
		.then((res) =>{
			// return history.push({pathname: "/login", flash: {success: res.data.success}});
			return history.push("/login");
		}).catch((err) => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}));
};