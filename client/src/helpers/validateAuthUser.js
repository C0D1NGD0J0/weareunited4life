import jwt_decode from "jwt-decode";
import setHeaderAuthToken from "./setHeaderAuthToken";
import { setAuthenticatedUser, logoutUserAction } from "../Actions/authAction";
import store from "../ReduxStore";

if(localStorage.jwtToken){
	setHeaderAuthToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);
	store.dispatch(setAuthenticatedUser(decoded));

	const currentTime = Date.now() / 1000;
	if(decoded.exp < currentTime){
		store.dispatch(logoutUserAction());
		window.location.href = "/";
	}
}