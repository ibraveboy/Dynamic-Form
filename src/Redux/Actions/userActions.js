import axios from "axios"
import { setAuthHeaders } from "../../Helpers/helperMethods"
import { SET_USER_DATA, SET_USER_ERROR, TOGGLE_USER_LOADER, SET_NOTICE, TOGGLE_DRAWER } from "../Constants"

export const loginUser = (user) => {
    return dispatch => {
        axios.post("https://testapi.io/api/ibraveboy/login", user)
            .then(res => {
                setAuthHeaders(res.data)
                return dispatch(getUser())
            }).catch(err => {
                dispatch(setNotice("Oops! Something went wrong."))
            })
    }
}

export const getUser = ()=> {
    return dispatch => {
        let token = axios.defaults.headers.common["Authorization"].split(" ")[1]
        axios.post("https://testapi.io/api/ibraveboy/me?token="+token)
            .then(res => {
                return dispatch({
                    type: SET_USER_DATA,
                    payload:res.data
                })
            })
            .catch(err => {
                dispatch(setNotice("Oops! Something went wrong."))
            })
    }
}

export const setUserError = (errors) => {
    return {
        type: SET_USER_ERROR,
        payload: errors
    }
}

export const toggleUserLoader = () => {
    return {
        type: TOGGLE_USER_LOADER,
    }
}

export const setNotice = (notice) => {
    return {
        type: SET_NOTICE,
        payload:notice,
    }
}

export const toggleDrawer = (event, open) => {
    return dispatch => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        return dispatch({
            type: TOGGLE_DRAWER,
            payload:open
        }) 
    }
    
}