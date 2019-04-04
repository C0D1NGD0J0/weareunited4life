import { GET_ERRORS, GET_CATEGORIES, CLEAR_CATEGORIES, ADD_NEW_CATEGORY } from "./types";
import { setLoadingState } from "./utilAction";
import axios from "axios";

export const getCategoriesAction = () => async (dispatch) =>{
	await axios.get("/api/categories/").then((res) =>{
		return dispatch({
			type: GET_CATEGORIES,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const newCategoryAction = (categorydata) => async (dispatch) =>{
	axios.post("/api/categories/", categorydata).then((res) =>{
		dispatch({
			type: ADD_NEW_CATEGORY,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};