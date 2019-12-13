import "./ProductForm.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
    productTitleChangeHandler,
    addProductHandler,
    addIngredientHandler
} from "../../../Redux/Actions";
import IngredientForm from "../IngredientForm/IngredientForm";

class ProductForm extends Component {
    addIngredientClickHandler = () => {
        this.props.addIngredientHandler({
            ingredientName: this.props.name + ("ingredient" + (this.props.ingredients.length+1)),
            ingredientValue: "",
            ingredientFilename: this.props.name + ("ingredientfile" + (this.props.ingredients.length+1)),
            ingredientFilevalue:""
        },this.props.name)
    }
    render() {
        let allIngredients = this.props.ingredients.map(ingredient => {
            return (
                <IngredientForm
                    key={ingredient.ingredientName}
                    name={ingredient.ingredientName}
                    filename={ingredient.ingredientFilename}
                    value={ingredient.ingredientValue}
                    filevalue={ingredient.ingredientFilevalue}
                />
            );
        });
        return (
            <div className="product-form">
                <fieldset>
                    <legend> {this.props.value || "Product Title"} </legend>
                    <div className="form-group mt-0">
                        <input
                            type="text"
                            name={this.props.name}
                            className="form-control"
                            id="formGroupExampleInput"
                            value={this.props.value}
                            placeholder="Enter Product Title"
                            onChange={e =>
                                this.props.productTitleChangeHandler(e)
                            }
                        />
                    </div>
                    <div className="row ingredients">
                        <div className="add-ingredient-btn-wrapper">
                            <span
                                className="add-ingredient-btn"
                                title="Add more ingredients"
                                onClick={this.addIngredientClickHandler}
                            >
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
                        {allIngredients}
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
    addIngredientHandler
})(ProductForm);
