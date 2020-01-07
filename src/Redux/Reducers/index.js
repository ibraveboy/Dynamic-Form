
import { combineReducers } from "redux"
import { userReducer } from "./userReducer";
import addProductReducer from "./addproductreducer"
import todoReducer from "./todoReducer"
import companyReducer from "./companyReducer"

export default combineReducers({ addProductReducer,userReducer,todoReducer,companyReducer });