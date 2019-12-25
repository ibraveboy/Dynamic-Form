import { SET_COMPANIES, TOGGLE_COMPANY_LOADER,SET_COMPANY_ERRORS } from "../Constants"

const initialState = {
    companies: [],
    loader: false,
    error:null
}

const companyReducer = (state = initialState, action) => {
    if (action.type === SET_COMPANIES) {
        return {
            ...state,
            companies: action.payload,
            loader: false,
            error:null
        }
    }
    else if (action.type === TOGGLE_COMPANY_LOADER) {
        return {
            ...state,
            loader:action.payload
        }
    }
    else if (action.type === SET_COMPANY_ERRORS) {
        return {
            ...state,
            error: action.payload,
            loader:false
        }
    }
    return state
}

export default companyReducer;