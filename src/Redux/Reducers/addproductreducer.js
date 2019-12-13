import { ADD_PRODUCT,PRODUCT_TITLE_CHANGE, ADD_INGREDIENT } from "../Constants"
const initialState = {
    products:[]
}

const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products:[...state.products,action.payload]
            }
            
        case PRODUCT_TITLE_CHANGE:
            var products = state.products.slice()
            var productIndex = products.findIndex((product, index) => {
                return product.productName === action.payload.name
            })
            products[productIndex].productValue = action.payload.value
            return {
                ...state,
                products:[...products]
            }
        
        case ADD_INGREDIENT:
            products = state.products.slice()
            productIndex = products.findIndex((product, index) => {
                return product.productName === action.payload.productName
            })
            products[productIndex].productIngredients.push(action.payload.newIngredient)
            return {
                ...state,
                products:[...products]
            }
        
        default:
            return state
            
    }
}

export default addProductReducer