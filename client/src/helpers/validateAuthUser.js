import jwt_decode from "jwt-decode";
import setHeaderAuthToken from "./setHeaderAuthToken";
import { setAuthenticatedUser } from "../Actions/authAction";
import store from "../ReduxStore";

if(localStorage.jwtToken){
	setHeaderAuthToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);
	store.dispatch(setAuthenticatedUser(decoded));
}