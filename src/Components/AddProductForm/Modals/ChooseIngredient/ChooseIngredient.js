import "./ChooseIngredient.scss"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeChooseIngredientModal,addIngredientHandler,replaceIngredientHandler } from "../../../../Redux/Actions"
import shortid from "shortid"

class ChooseIngredient extends Component {

    state = {
        selectedIngredientIndex: "",
        selectedIngredientProductIndex:"",
    }

    addPreviousIngredientHandler = () => {
        // If ingredient is not selected 

        if (this.state.selectedIngredientIndex === "") {
            alert("Select an ingredient please.")
            return false
        }

        // if ingredient is selected
        // The Ingredient Object that is selected by the user

        let ingredient = this.props.products[this.state.selectedIngredientProductIndex].ingredients[this.state.selectedIngredientIndex]
        ingredient={...ingredient,_id:shortid.generate()}
        // All the ingredients of the current product 

        let ingredientsTemp = this.props.products[this.props.productIndexForChooseIngredientModal].ingredients

        //If there is not ingredient

        if (ingredientsTemp.length === 0) {
            this.props.addIngredientHandler(ingredient,this.props.productIndexForChooseIngredientModal)
        }
        // If there is only one ingredient

        else if (ingredientsTemp.length === 1) {

            let ingredientTemp = ingredientsTemp[0]
            
            //if that one ingredient of the current product is empty then replace it with the selected one
            
            if (ingredientTemp.name === "" && ingredientTemp.specSheet === "" && ingredientTemp.supplierName === "") {
                this.props.replaceIngredientHandler(ingredient,this.props.productIndexForChooseIngredientModal,0)
            } else {
                //Otherwise add the ingredient into current product

                this.props.addIngredientHandler(ingredient,this.props.productIndexForChooseIngredientModal)
            }
    
        } else {

            // If there are more than one ingredient then check if they are filled

            let err = ""
            this.props.ingredients.forEach(ingredient => {
                // || ingredient.ingredientFilevalue === "" || ingredient.ingredientSupplierValue === ""

                //If unfilled field found then alert
                if (ingredient.name === "") {
                    alert("File all the fields of ingredients added before.")
                    err=true
                    return false
                }
            })
            // if fields are not filled then stop the function
            if (err)
                return false
            
            //else add ingredient into the product
            this.props.addIngredientHandler(
                ingredient,
                this.props.productIndexForChooseIngredientModal
            );
        }

        
    }

    // if select options 
    onIngredientSelectChange = (e) => {
        let indexes = e.target.value
        indexes = indexes.split(" ")
        if (indexes.length > 1) {
            this.setState({
                selectedIngredientIndex: indexes[0],
                selectedIngredientProductIndex:indexes[1]
            })
        } else {
            this.setState({
                selectedIngredientIndex: "",
                selectedIngredientProductIndex:""
            })
        }
    }
    render() {
        
        let options = []
        for (let i = 0; i < this.props.products.length; i++){
            if (this.props.productIndexForChooseIngredientModal === i)
                continue
            this.props.products[i].ingredients.forEach((ingredient, index) => {
                options.push(
                    <option value={index+" "+i} key={ingredient._id}>
                        {ingredient.name||"Name not available"}
                    </option>
                )
            })
        }
        
        
        return (
            <div className="choose-ingredient-modal" style={{display:(this.props.chooseIngredientModalVisibility?"flex":"none")}}>
                <div className="dark-overlay"></div>
                <div className="choose-ingredient-modalbox text-center py-5">
                    <div className="h2 mt-0 mb-1">
                        Select previously added ingredient
                    </div>
                    <p>
                        <small>
                            You can select previously added ingredient by clicking the following "Select Box" <br/> and then choose the desired ingredient. 
                        </small>
                    </p>
                    <div className="select-box-wrapper mt-4">
                        <div className="form-group">
                            <select
                                className="custom-select"
                                value={this.state.selectedIngredient}
                                onChange={this.onIngredientSelectChange}
                            >
                                <option value="">
                                    Click here to select ingredient
                                </option>
                                {options}
                            </select>
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={this.addPreviousIngredientHandler}
                            >
                                Select ingredient
                            </button>
                        </div>
                    </div>
                    <div className="close-btn-wrapper">
                        <span
                            className="close-btn"
                            title="Close"
                            onClick={()=>this.props.closeChooseIngredientModal()}
                        >
                            X
                        </span>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default connect(mapStateToProps, {closeChooseIngredientModal,addIngredientHandler,replaceIngredientHandler})(ChooseIngredient)