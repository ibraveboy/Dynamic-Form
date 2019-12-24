
import { combineReducers } from "redux"
import addProductReducer from "./addproductreducer"
import { userReducer } from "./userReducer";
import todoReducer from "./todoReducer"

export default combineReducers({ addProductReducer,userReducer,todoReducer });