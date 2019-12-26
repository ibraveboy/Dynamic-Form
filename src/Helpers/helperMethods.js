import shortid from "shortid";
import axios from "axios";

export const createIngredientFieldsObject = () => {
    return {
        _id: shortid.generate(),
        name: "",
        specSheet: "",
        supplierName: ""
    };
};
export const isIngredientsEmpty = ingredients => {
    let empty = { isempty: false, errors: {} };
    for (let i = 0; i < ingredients.length; i++) {
        // || ingredient.specSheet === "" || ingredient.supplierName === ""

        //If unfilled field found then alert
        if (ingredients[i].name === "") {
            empty["isempty"] = true;
            empty.errors["key"] = ingredients[i]._id + "-name";
            empty.errors["value"] = "This field is required.";
            break;
        }
    }
    return empty;
};
export const isProductEmpty = product => {
    let empty = { isempty: false, errors: {} };
    if (product.name === "") {
        empty.isempty = true;
        empty.errors.key = product._id + "-name";
        empty.errors["value"] = "This field is required.";
    } else {
        empty = isIngredientsEmpty(product.ingredients);
    }
    return empty;
};

export const getQuestions = () => {
    return {
            "question1":"If the production process or manufacturing process uses any shared facility, please disclose the cleaning mechanisms in place and precautionary measures implemented to prevent any chance of cross-contamination that could result in trace amount of animal products being found in the final product.",
             "question2":"If applicable, please specify the kind of fertilizer you use? Fertilizer will not preclude you from vegan certification, but please disclose, if known, and if applicable.",
            "question3":"How do you fine, clarify, filter, and/or process your products, as applicable?",
            "question4":"If applicable, please describe any techniques you use to de-acidify your products? De-acidification refers to any processes used to achieve an acid reduction in the product prior to bottling.",
            "question5":"If you are certified organic, kosher, or have passed any other formal certification, please upload that paperwork, which will greatly assist our research process, and write here which mark you will be uploading.",
            "question6":"Do you use any known animals in your packaging (i.e. beeswax, dairy, animal-product based glue or ink in the final packaging). At this time, vegan packaging is not required to pass vegan product certification.",
            "question7":"Do you have an official storefront or tasting room the public visits?",
            "question8":"Please send us a picture of an ID for our records."
        }
};

export const isQuestionEmpty = (question) => {
    let empty = { isempty: false, errors: {} };
    if (!question.answer)
        empty.isempty = true
    return empty
}


export const btnShouldEnabled = (props) => {
    let emp = {
        isempty: true,
        errors:[]
    }
    for (let i = 0; i < props.products.length; i++){
        emp = isProductEmpty(props.products[i])
        if (emp.isempty)
            break;
    }
    if(!emp.isempty)
        for (let i = 0; i < props.questions.length; i++){
            emp = isQuestionEmpty(props.questions[i])
            if (emp.isempty)
                break
        }

    return !emp.isempty
}

export const mapStateToProps = state => {
    return state.addProductReducer;
};

export const setAuthHeaders = (token) => {
    if (token) {
        localStorage.setItem("authToken",token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    else {
        localStorage.removeItem("authToken")
        delete axios.defaults.headers.common["Authorization"] 
    }
}

export const sortRelevant = (productA, productB,q) => {
    // eslint-disable-next-line
    let regExp = eval("/" + q.toLowerCase().split(" ").join("|") + "/")
    
    if (q.split(" ").length === 1) {
        if (productA.brand.toLowerCase() === q.toLowerCase() && productB.brand.toLowerCase() === q.toLowerCase())
            return 0
        else if (productB.brand.toLowerCase() === q.toLowerCase()){
            return 1
        }
        else if (productA.brand.toLowerCase() === q.toLowerCase()) {
            return -1
        }
    }
    
    return productB.brand.toLowerCase().match(regExp).length - productA.brand.toLowerCase().match(regExp).length
}