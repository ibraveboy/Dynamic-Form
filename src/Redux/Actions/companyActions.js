import axios from "axios"
import { sortRelevant } from "../../Helpers/helperMethods"
import { SET_COMPANIES, TOGGLE_COMPANY_LOADER, SET_COMPANY_ERRORS } from "../Constants"

export const companySearchHandler = (q) => {
    return dispatch => {
        axios.get("https://testapi.io/api/ibraveboy/company/search?q=" + q)
            .then(res => {
                let sorted = res.data.sort((a,b) => {
                    return sortRelevant(a,b,q)
                })
                
                return dispatch({
                    type: SET_COMPANIES,
                    payload:sorted
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_COMPANY_ERRORS,
                    payload:"Oops! Something went wrong."
                })
            })
        
    }
} 


export const toggleCompanyLoader = (v) => {
    return {
        type: TOGGLE_COMPANY_LOADER,
        payload:v
   }
}