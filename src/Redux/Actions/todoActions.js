import { SET_TODO_LIST, ADD_TODO, UPDATE_TODO, DELETE_TODO, VIEW_TODO, HIDE_TODO, TOGGLE_IS_LOADING } from "../Constants"

import axios from "axios"

export const setToDoList = () => {
    return dispatch => {
        let token = axios.defaults.headers.common["Authorization"]
        token = token.split(" ")
        token = token[1]
        if (!token)
            token = axios.defaults.headers.common["Authorization"]
        axios.get("https://testapi.io/api/ibraveboy/api/todos?token="+token)
            .then(res => {
                return dispatch({
                    type: SET_TODO_LIST,
                    payload:res.data
                })
        })
    }
}

export const addToDo = (todo) => {
    return dispatch => {
        // call API to add todo object and inside `then(res=>{})` call dispatch as given below
        return dispatch({
            type: ADD_TODO,
            payload:todo
        })
    }
}

export const updateToDo = (todo, _id) => {
    
    return dispatch => {
        // call API to update todo object by id and inside `then(res=>{})` call dispatch as given below
        dispatch({
            type: UPDATE_TODO,
            payload:{todo,_id}
        })
    }
}

export const deleteToDo = (_id) => {
    return dispatch => {
        // call API To delete todo object by id
        dispatch({
            type: DELETE_TODO,
            payload:_id
        })
    }
}

export const viewToDo = (todo) => {
    // Click to view todo item on modal
    return {
        type: VIEW_TODO,
        payload:todo
    }
}

export const hideToDo = (todo) => {
    //Click to hide todo item
    return {
        type: HIDE_TODO,
    }
}

export const toggleIsLoading = () => {
    return {
        type:TOGGLE_IS_LOADING
    }
}