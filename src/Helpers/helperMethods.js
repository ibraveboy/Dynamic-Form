export const createIngredientFieldsObject = (name,length) => {
    return {
        ingredientName: name + ("ingredient" + (length+1)),
        ingredientValue: "",
        ingredientFilename: name + ("ingredientfile" + (length+1)),
        ingredientFilevalue: "",
        ingredientSupplierName: name + ("ingredientsupplier" + (length + 1)),
        ingredientSupplierValue:""
    }
}
export const isIngredientsEmpty = (ingredients) => {
    let empty = { isempty: false, errors: {}}
    for (let i = 0; i < ingredients.length;i++) {
        // || ingredient.ingredientFilevalue === "" || ingredient.ingredientSupplierValue === ""

        //If unfilled field found then alert
        if (ingredients[i].ingredientValue === "") {
            
            empty["isempty"] = true
            empty.errors["key"] = ingredients[i].ingredientName
            empty.errors["value"] = "This field is required."
            break;
        }
    }
    return empty
}
export const isProductEmpty = (product) => {
    console.log(product)
    let empty = { isempty: false, errors: {}}
    if (product.productValue === "") {
        empty.isempty= true
        empty.errors.key = product.productName
        empty.errors["value"]="This field is required."
        
    } else {
        empty = isIngredientsEmpty(product.productIngredients)
        
    }
    return empty
    
}