import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
	auth: authReducer,
	currentuser: userReducer,
	posts: postReducer,
	category: categoryReducer,
	errors: errorReducer
});