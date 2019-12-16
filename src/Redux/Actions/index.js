import { PRODUCT_TITLE_CHANGE, ADD_PRODUCT, ADD_INGREDIENT, INGREDIENT_FIELD_CHANGE, OPEN_CHOOSE_INGREDIENT_MODAL, CLOSE_CHOOSE_INGREDIENT_MODAL, REPLACE_INGREDIENT, SET_ERROR, INGREDIENT_FILE_UPLOAD } from "../Constants"

export const productTitleChangeHandler = (e) => {
    return {
        type: PRODUCT_TITLE_CHANGE,
        payload:e.target
    }
}

export const addProductHandler = (newProduct) => {
    return {
        type: ADD_PRODUCT,
        payload: newProduct
    }
}

export const addIngredientHandler = (newIngredient,productIndex) => {
    return {
        type: ADD_INGREDIENT,
        payload: {newIngredient,productIndex}
    }
}

export const replaceIngredientHandler = (newIngredient,productIndex,ingredientIndex) => {
    return {
        type: REPLACE_INGREDIENT,
        payload: {newIngredient,productIndex,ingredientIndex}
    }
}

export const ingredientFieldChangeHandler = (e, productIndex, ingredientIndex) => {
    console.log(productIndex,ingredientIndex)
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