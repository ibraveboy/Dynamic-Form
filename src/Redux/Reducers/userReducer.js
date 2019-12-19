import { SET_USER_DATA, SET_USER_ERROR, TOGGLE_USER_LOADER } from "../Constants/index"

const initialState = {
    _Id:"",
    email:"",
    firstName: "",
    lastName: "",
    password: "",
    errors: {},
    loader:false
}

export const userReducer = (state=initialState,action)=>{
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.payload,
            loader: false,
            errors:{}
        }
    }
    else if (action.type === SET_USER_ERROR) {
        return {
            ...state,
            errors: { ...state.errors,...action.payload },
            loader:false,
        }
    }
    else if (action.type === TOGGLE_USER_LOADER) {
        return {
            ...state,
            loader: !state.loader,
        }
    }
    return state
}