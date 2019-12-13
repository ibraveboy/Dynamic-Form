import { PRODUCT_TITLE_CHANGE, ADD_PRODUCT, ADD_INGREDIENT } from "../Constants"

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

export const addIngredientHandler = (newIngredient,productName) => {
    return {
        type: ADD_INGREDIENT,
        payload: {newIngredient,productName}
    }
}