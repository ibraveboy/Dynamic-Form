import { SET_TODO_LIST, ADD_TODO, UPDATE_TODO, DELETE_TODO, VIEW_TODO, HIDE_TODO, TOGGLE_IS_LOADING } from "../Constants"

const initialState = {
    columns: [
        { title: 'Title', field: 'title',editable:'never' },
        { title: 'Description', field: 'description',editable:'never' },
        { title: 'Deadline', field: 'date', type: 'date',editable:'never' },
        {
            title: 'Status',
            field: 'complete',
            lookup: { false: 'pending', true: 'completed','started':'started' },
        },
      ],
    todoList: [],
    isLoading: true,
    todoModal: {
        visible: false,
        todo:null
    }
}

const todoReducer = (state = initialState, action) => {
    if (action.type === SET_TODO_LIST) {
        return {
            ...state,
            todoList: [...action.payload],
            isLoading:false,
        }
    }
    else if (action.type === ADD_TODO) {
        return {
            ...state,
            todoList: [...state.todoList,action.payload],
            isLoading:false
        }
    }
    else if (action.type === UPDATE_TODO) {
        let todoList = state.todoList
        let index = todoList.findIndex(todo => {
            return todo._id === action.payload._id
        })
        todoList[index] = action.payload.todo
        console.log(todoList);
        
        return {
            ...state,
            todoList,
            isLoading:false
        }
    }
    else if (action.type === DELETE_TODO) {
        let todoList = state.todoList
        let index = todoList.findIndex(todo => {
            return todo._id === action.payload._id
        })
        todoList.splice(index, 1)
        return {
            ...state,
            todoList,
            isLoading:false
        }
    }
    else if (action.type === VIEW_TODO) {
        return {
            ...state,
            todoModal: {
                visible: true,
                todo:action.payload
            },
            isLoading:false,
        }
    }
    else if (action.type === HIDE_TODO) {
        return {
            ...state,
            todoModal: {
                visible: false,
                todo:null
            },
            isLoading:false
        }
    }
    else if (action.type === TOGGLE_IS_LOADING) {
        return {
            ...state,
            isLoading:true
        }
    }
    return state
}

export default todoReducer