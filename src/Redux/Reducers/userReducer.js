import { SET_USER_DATA, SET_USER_ERROR, TOGGLE_USER_LOADER, SET_NOTICE, TOGGLE_DRAWER } from "../Constants/index"

const initialState = {
    _Id:"",
    email:"",
    firstName: "",
    lastName: "",
    password: "",
    errors: {},
    loader: false,
    notice: null,
    open: false,
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
    else if (action.type === SET_NOTICE) {
        return {
            ...state,
            notice: action.payload,
            loader:false
        }
    }
    else if (action.type === TOGGLE_DRAWER) {
        return {
            ...state,
            open:action.payload
        }
    }
    return state
}