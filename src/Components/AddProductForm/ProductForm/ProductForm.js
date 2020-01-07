import "./ProductForm.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
    productTitleChangeHandler,
    addProductHandler,
    addIngredientHandler,
    openChooseIngredientModal,
    setError,
    deleteProductHandler
} from "../../../Redux/Actions";
import IngredientForm from "../IngredientForm/IngredientForm";
import { createIngredientFieldsObject } from "../../../Helpers/helperMethods";

class ProductForm extends Component {
    state = {
        menuVisibility: false,
    };

    //Plus(+) button Click Handler To Display Add Ingredient Menu

    plusBtnClickHandler = () => {
        this.setState({
            menuVisibility: !this.state.menuVisibility
        });
    };

    // Add Ingredient, List Option Click Handler

    addIngredientClickHandler = e => {
        let err = ""
        this.props.ingredients.forEach(ingredient => {
            // || ingredient.specSheet === "" || ingredient.supplierName === ""
            if (ingredient.name === "") {
                alert("Fill all the fields of ingredient added before.")
                this.props.setError(ingredient._id+"-name","This field is required.")
                err=true
                return false
            }
        })
        if (err)
            return false
        this.props.addIngredientHandler(
            createIngredientFieldsObject(),
            this.props.productIndex
        );
    };

    // Choose ingredient modal open 

    openChooseIngredientModal = () => {
        this.props.openChooseIngredientModal(this.props.productIndex)
    }

    // Delete Product
    deleteProduct = () => {
        if (this.props.products.length === 1) {
            alert("There is only one product.")
            return false
        }
        if (window.confirm("This action cannot be undone. Do you really want to delete?")) {
            this.props.deleteProductHandler(this.props.productIndex,this.props.id)
        } 

    }
    render() {

        const { errors,ingredients } = this.props
        let allIngredients = ingredients.map((ingredient, index) => {
            return (
                <IngredientForm
                    key={ingredient._id}
                    id={ingredient._id}
                    value={ingredient.name}
                    filevalue={ingredient.specSheet}
                    suppliervalue={ingredient.supplierName}
                    ingredientIndex={index}
                    productIndex={this.props.productIndex}
                />
            );
        });
        return (
            <div className="product-form">
                
                <fieldset>
                    <legend>
                        {this.props.value || "Product Title"}
                        <div className="col-12 product-close-wrapper">
                            <span
                                className="close-btn bg-danger"
                                title="Remove Product"
                                onClick={this.deleteProduct}
                            >
                                Delete Product
                            </span>
                        </div>
                    </legend>
                    <div className="form-group mt-0 product-title-input">
                        
                        <input
                            type="text"
                            name="name"
                            className={"form-control "+(errors?(errors[this.props.id+"-name"]?"is-invalid":""):"")}
                            value={this.props.value}
                            placeholder="Enter Product Title"
                            onChange={e =>
                                this.props.productTitleChangeHandler(e,this.props.productIndex)
                            }
                        />
                        {(errors ? (errors[this.props.id+"-name"] ? (
                            <small className="text-danger">
                                {errors[this.props._id]}           
                            </small>
                        ):null):null)}
                    </div>
                    <div className="row ingredients">
                        <div className="add-ingredient-btn-wrapper">
                            <span
                                className="add-ingredient-btn"
                                title="Add more ingredients"
                                onClick={this.plusBtnClickHandler}
                            >
                                <div
                                    className={
                                        "add-ingredient-menu " +
                                        (this.state.menuVisibility
                                            ? "show"
                                            : "")
                                    }
                                >
                                    <div className="list-group">
                                        <span
                                            className="list-group-item list-group-item-action"
                                            onClick={
                                                this.addIngredientClickHandler
                                            }
                                        >
                                            Add new ingredient
                                        </span>
                                        {this.props.productIndex > 0 ? (
                                            <span
                                                className="list-group-item list-group-item-action"
                                                onClick={this.openChooseIngredientModal}
                                            >
                                                Add previously added ingredient
                                            </span>
                                        ): null}
                                    </div>
                                </div>
                                +
                            </span>
                        </div>
                        <div className="col-12">
                            <h5 className="mb-0">Ingredients</h5>
                            <p className="pt-0 my-0">
                                <small>
                                    You can add more gredients just by clicking
                                    "+" button placed at the bottom of this
                                    section.
                                </small>
                            </p>
                        </div>
                        <div className="col-12">{allIngredients}</div>
                        
                    </div>
                </fieldset>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default connect(mapStateToProps, {
    productTitleChangeHandler,
    addProductHandler,
    addIngredientHandler,
    openChooseIngredientModal,
    setError,
    deleteProductHandler
})(ProductForm);
