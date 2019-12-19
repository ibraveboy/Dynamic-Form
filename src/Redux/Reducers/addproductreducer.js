import { ADD_PRODUCT,PRODUCT_TITLE_CHANGE, ADD_INGREDIENT, INGREDIENT_FIELD_CHANGE, OPEN_CHOOSE_INGREDIENT_MODAL, CLOSE_CHOOSE_INGREDIENT_MODAL, REPLACE_INGREDIENT, SET_ERROR, INGREDIENT_FILE_UPLOAD, DELETE_INGREDIENT, SET_INTERVAL_ID, DELETE_PRODUCT, ANSWER_TEXT_CHANGE, ANSWER_FILE_UPLOAD, SET_FORM_ID, SET_FORM_DATA, CLEAR_INTERVAL_ID, INGREDIENT_FILE_DELETE, ANSWER_FILE_DELETE, TOGGLE_SUCCESS_MODAL, SAVE_FORM_DATA, TOGGLE_LOADER } from "../Constants"
import shortid from "shortid"
const initialState = {
    products: [],
    questions: [
        {
        name: "question1",
        answer:""
        },
        {
            name: "question2",
            answer:""
        },
        {
            name: "question3",
            answer:""
        },
        {
            name: "question4",
            answer:""
        },
        {
            name: "question5",
            answer:""
        },
        {
            name: "question6",
            answer:""
        },
        {
            name: "question7",
            answer:""
        },
        {
            name: "question8",
            answer:""
        }
    ],
    intervalId:null,
    productIndexForChooseIngredientModal: -1,
    chooseIngredientModalVisibility: false,
    successModalVisibility: false,
    successModalText: "",
    loaderVisible:false,
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
        
        else if (action.type === DELETE_PRODUCT) {
            let products = state.products.slice()
            if (products[action.payload.index].id === action.payload.id) {
                products.splice(action.payload.index,1)
            } else {
                let index = products.findIndex(product => {
                    return product._id === action.payload.id
                })
                products.splice(index,1)
            }
            return {
                ...state,
                products:[...products]
            }
        }
            
        else if (action.type===PRODUCT_TITLE_CHANGE)
        {
            let products = state.products.slice()
            // var productIndex = products.findIndex((product) => {
            //     return product.productName === action.payload.name
            // })
            products[action.payload.index].name = action.payload.target.value
            return {
                ...state,
                products: [...products],
                errors: {
                    ...state.errors,
                    [products[action.payload.index]._id+"-name"]:null
                }
            }
        }
        
        else if (action.type===ADD_INGREDIENT)
        {
            let products = state.products.slice()
            products[action.payload.productIndex].ingredients.push(action.payload.newIngredient)
            return {
                ...state,
                products: [...products],
                chooseIngredientModalVisibility: false,
            }
        }
        else if (action.type === DELETE_INGREDIENT) {
            
            let products = state.products.slice()
            let id = products[action.payload.productIndex].ingredients[action.payload.index]._id
            if (id === action.payload.id)
                products[action.payload.productIndex].ingredients.splice(action.payload.index,1)
            else {
                let index = products[action.payload.productIndex].ingredients.findIndex(ingredient => {
                    return ingredient._id === action.payload.id
                })
                products[action.payload.productIndex].ingredients.splice(index,1)
            }
            return {
                ...state,
                products:[...products]
            }
        }
        else if (action.type===REPLACE_INGREDIENT)
        {
            let products = state.products.slice()
            products[action.payload.productIndex].ingredients[action.payload.ingredientIndex].id = shortid.generate()
            products[action.payload.productIndex].ingredients[action.payload.ingredientIndex]=action.payload.newIngredient
            return {
                ...state,
                products: [...products],
                chooseIngredientModalVisibility: false,
            }
        }
        
        else if (action.type===INGREDIENT_FIELD_CHANGE)
        {   
            let products = state.products.slice();
            // let targetName = action.payload.target.name
            // let fieldName = action.payload.target.getAttribute("propertyname");
            let ingredient =products[action.payload.productIndex].ingredients[action.payload.ingredientIndex]
            ingredient[action.payload.target.name] = action.payload.target.value
            return {
                ...state,
                products: [...products],
                errors: {
                    ...state.errors,
                    [ingredient._id+"-"+action.payload.target.name]:null
                }
            }
        }
        else if (action.type===INGREDIENT_FILE_UPLOAD)
        {    
            let products = state.products.slice();
            let ingredient = products[action.payload.productIndex].ingredients[action.payload.ingredientIndex]
            ingredient.specSheet = action.payload.file
            return {
                ...state,
                products: [...products],
                loaderVisible:false,
                errors: {
                    ...state.errors,
                    [ingredient._id+"-specSheet"]:null
                }
            }
        }
        else if (action.type === INGREDIENT_FILE_DELETE) {
            let products = state.products.slice();
            let ingredient = products[action.payload.productIndex].ingredients[action.payload.ingredientIndex]
            ingredient.specSheet = null
            return {
                ...state,
                products: [...products],
                loaderVisible:false,
                errors: {
                    ...state.errors,
                    [ingredient._id+"-specSheet"]:null
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
        else if (action.type === SET_INTERVAL_ID) {
            return {
                ...state,
                intervalId:action.payload
            }
        }
        else if (action.type === CLEAR_INTERVAL_ID) {
            return {
                ...state,
                intervalId:null,
            }
        }
        else if (action.type === ANSWER_TEXT_CHANGE) {
            let questions = state.questions
            questions[action.payload.index].answer = action.payload.target.value 
            return {
                ...state,
                questions:[...questions]
            }
        }
        
        else if (action.type === ANSWER_FILE_UPLOAD) {
            let questions = state.questions
            questions[action.payload.index].answer = action.payload.file 
            return {
                ...state,
                questions: [...questions],
                loaderVisible:false,
            }
        }
        else if (action.type === ANSWER_FILE_DELETE) {
            let questions = state.questions
            questions[action.payload.index].answer = ""
            return {
                ...state,
                questions: [...questions],
                loaderVisible:false,
            }
        }
        else if (action.type === SET_FORM_ID) {
            return {
                ...state,
                _id:shortid.generate()
            }
        }
        else if (action.type === SET_FORM_DATA) {
            return {
                ...state,
                ...action.payload,
            }
        }
        else if (action.type === SAVE_FORM_DATA) {
            return {
                ...state,
                ...action.payload,
                successModalVisibility: true,
                successModalText: "Form data has been submitted.",
                loaderVisible:false
            }
        }
        else if (action.type === TOGGLE_SUCCESS_MODAL) {
            return {
                ...state,
                successModalVisibility: !state.successModalVisibility,
                successModalText:action.payload
            }
    }
    else if (action.type === TOGGLE_LOADER) {
        return {
            ...state,
            loaderVisible: !state.loaderVisible
        }
    }
        return state    
}

export default addProductReducer