import { PRODUCT_TITLE_CHANGE, ADD_PRODUCT, ADD_INGREDIENT, INGREDIENT_FIELD_CHANGE, OPEN_CHOOSE_INGREDIENT_MODAL, CLOSE_CHOOSE_INGREDIENT_MODAL, REPLACE_INGREDIENT, SET_ERROR, INGREDIENT_FILE_UPLOAD, DELETE_PRODUCT, DELETE_INGREDIENT, SET_INTERVAL_ID, ANSWER_TEXT_CHANGE, ANSWER_FILE_UPLOAD, SET_FORM_ID, SET_FORM_DATA, CLEAR_INTERVAL_ID } from "../Constants"

export const productTitleChangeHandler = (e,index) => {
    return {
        type: PRODUCT_TITLE_CHANGE,
        payload:{target:e.target,index}
    }
}

export const addProductHandler = (newProduct) => {
    return {
        type: ADD_PRODUCT,
        payload: newProduct
    }
}

export const deleteProductHandler = (index,id) => {
    return {
        type: DELETE_PRODUCT,
        payload: {index,id}
    }
}

export const addIngredientHandler = (newIngredient,productIndex) => {
    return {
        type: ADD_INGREDIENT,
        payload: {newIngredient,productIndex}
    }
}

export const deleteIngredientHandler = (productIndex,index,id) => {
    return {
        type: DELETE_INGREDIENT,
        payload: {productIndex,index,id}
    }
}

export const replaceIngredientHandler = (newIngredient,productIndex,ingredientIndex) => {
    return {
        type: REPLACE_INGREDIENT,
        payload: {newIngredient,productIndex,ingredientIndex}
    }
}

export const ingredientFieldChangeHandler = (e, productIndex, ingredientIndex) => {
    return {
        type: INGREDIENT_FIELD_CHANGE,
        payload: {target:e.target,productIndex,ingredientIndex}
    }
}

export const ingredientFileUpload = (file,e,productIndex,ingredientIndex) => {
    return (dispatch) => {
        
        //Upload file to the server Api call and after Response call dispatch

        return dispatch({
            type: INGREDIENT_FILE_UPLOAD,
            payload: {
                file:{
                    name: file.name,
                    size: ((file.size / 1000000) < 1?((file.size/1000)+"KB"):((file.size / 1000000)+"MB")),
                    url: "",
                },
                target: e.target,
                productIndex,
                ingredientIndex
            }
        })
    }
} 

export const openChooseIngredientModal = (productIndex) => {
    return {
        type: OPEN_CHOOSE_INGREDIENT_MODAL,
        payload:productIndex
    }
}

export const closeChooseIngredientModal = () => {
    return {
        type:CLOSE_CHOOSE_INGREDIENT_MODAL
    }
}

export const setError = (key,value) => {
    return {
        type: SET_ERROR,
        payload:{key,value}
    }
}

export const setIntervalId = (id) => {
    return {
        type: SET_INTERVAL_ID,
        payload:id
    }
}

export const clearIntervalId = (id) => {
    clearInterval(id)
    return {
        type: CLEAR_INTERVAL_ID
    }
}

export const answerTextChangeHandler = (e,index) => {
    return {
        type: ANSWER_TEXT_CHANGE,
        payload:{target:e.target,index}
    }
}

export const answerFileChangeHandler = (e,file,index) => {
    return {
        type: ANSWER_FILE_UPLOAD,
        payload:{target:e.target,file,index}
    }
}

export const setFormId = () => {
    return {
        type: SET_FORM_ID,
    }
}

export const setFormData = (id,history) => {
    return (dispatch) => {
        let productForms = localStorage.getItem("productForms")
        if (productForms) {
            productForms = JSON.parse(productForms)
            let productForm = productForms.find(pf => {
                return pf._id === id
            })
            if (productForm) {
                return dispatch({
                    type: SET_FORM_DATA,
                    payload:productForm
                })
            } else
                history.push("/productform")
        } else {
            history.push("/productform")
        }
    }
}