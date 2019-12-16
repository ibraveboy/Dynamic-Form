import { ADD_PRODUCT,PRODUCT_TITLE_CHANGE, ADD_INGREDIENT, INGREDIENT_FIELD_CHANGE, OPEN_CHOOSE_INGREDIENT_MODAL, CLOSE_CHOOSE_INGREDIENT_MODAL, REPLACE_INGREDIENT, SET_ERROR, INGREDIENT_FILE_UPLOAD } from "../Constants"
const initialState = {
    products: [],
    productIndexForChooseIngredientModal: -1,
    chooseIngredientModalVisibility: false,
    errors:null
}

const addProductReducer = (state = initialState, action) => {
    
        if (action.type === ADD_PRODUCT)
        {
            return {
                ...state,
                products:[...state.products,action.payload]
            }
        }
            
        else if (action.type===PRODUCT_TITLE_CHANGE)
        {
            let products = state.products.slice()
            var productIndex = products.findIndex((product) => {
                return product.productName === action.payload.name
            })
            products[productIndex].productValue = action.payload.value
            return {
                ...state,
                products: [...products],
                errors: {
                    ...state.errors,
                    [products[productIndex].productName]:null
                }
            }
        }
        
        else if (action.type===ADD_INGREDIENT)
        {
            let products = state.products.slice()
            products[action.payload.productIndex].productIngredients.push(action.payload.newIngredient)
            return {
                ...state,
                products: [...products],
                chooseIngredientModalVisibility: false,
            }
        }
        else if (action.type===REPLACE_INGREDIENT)
        {
            let products = state.products.slice()
            products[action.payload.productIndex].productIngredients[action.payload.ingredientIndex]=action.payload.newIngredient
            return {
                ...state,
                products: [...products],
                chooseIngredientModalVisibility: false,
            }
        }
        
        else if (action.type===INGREDIENT_FIELD_CHANGE)
        {   
            let products = state.products.slice();
            let targetName = action.payload.target.name
            let fieldName = action.payload.target.getAttribute("propertyname");
            products[action.payload.productIndex].productIngredients[action.payload.ingredientIndex][fieldName] = action.payload.target.value
            return {
                ...state,
                products: [...products],
                errors: {
                    ...state.errors,
                    [targetName]:null
                }
            }
        }
        else if (action.type===INGREDIENT_FILE_UPLOAD)
        {    
            let products = state.products.slice();
            let targetName = action.payload.target.name
            let fieldName = action.payload.target.getAttribute("propertyname");
            products[action.payload.productIndex].productIngredients[action.payload.ingredientIndex][fieldName] = action.payload.file
            return {
                ...state,
                products: [...products],
                errors: {
                    ...state.errors,
                    [targetName]:null
                }
            }
        }
        else if (action.type===OPEN_CHOOSE_INGREDIENT_MODAL)
        {    
            return {
                ...state,
                chooseIngredientModalVisibility: true,
                productIndexForChooseIngredientModal: action.payload,
            }
        }
        else if (action.type === CLOSE_CHOOSE_INGREDIENT_MODAL)
        {    
            return {
                ...state,
                chooseIngredientModalVisibility: false,
                productIndexForChooseIngredientModal:-1
            }
        }
        else if (action.type === SET_ERROR)
        {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.key]:action.payload.value
                }
            }
        }
        
        return state    
}

export default addProductReducer