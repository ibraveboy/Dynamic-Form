
import { combineReducers } from "redux"
import addProductReducer from "./addproductreducer"
import { userReducer } from "./userReducer";

export default combineReducers({ addProductReducer,userReducer });