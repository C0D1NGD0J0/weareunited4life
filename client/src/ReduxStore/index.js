"use strict";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/";

const middleware = [thunk];
const initialState = {};

const store = createStore(() => rootReducer, initialState, applyMiddleware(...middleware));

export default store;