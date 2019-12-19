import axios from "axios"
import { setAuthHeaders } from "../../Helpers/helperMethods"
import { SET_USER_DATA, SET_USER_ERROR, TOGGLE_USER_LOADER } from "../Constants"

export const loginUser = (user) => {
    return dispatch => {
        axios.post("http://5dfbdb960301690014b900d1.mockapi.io/api/login", user)
            .then(res => {
                setAuthHeaders(res.data)
                return dispatch(getUser())
            }).catch(err => {
                alert("Something went wrong.")
            })
    }
}

export const getUser = ()=> {
    return dispatch => {
        axios.post("http://5dfbdb960301690014b900d1.mockapi.io/api/me")
            .then(res => {
                return dispatch({
                    type: SET_USER_DATA,
                    payload:res.data
                })
            })
            .catch(err => {
                alert("Something went wrong.")
                dispatch(toggleUserLoader())
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