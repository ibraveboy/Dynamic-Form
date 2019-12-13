import "./AddProductForm.scss";
import React, { Component } from "react";
// eslint-disable-next-line
import ProductForm from "../../Components/AddProductForm/ProductForm/ProductForm";
import { connect } from "react-redux";
import { addProductHandler } from "../../Redux/Actions";

class AddProductForm extends Component {
    state = {
        products: []
    };
    componentDidMount() {
        if (this.props.products.length === 0) {
            let productName = "product" + (this.props.products.length + 1);
            let productIngredients = [
                {
                    ingredientName: productName + ("ingredient" + 1),
                    ingredientValue: "",
                    ingredientFilename: productName + ("ingredientfile" + 1),
                    ingredientFilevalue:""
                }
            ];
            let productValue = "";
            this.props.addProductHandler({
                productName,
                productValue,
                productIngredients
            });
        }
    }
    onTextChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        
        // Mapping Product Fields
        let allProductFields = this.props.products.map((product, index) => {
            return (
                <ProductForm
                    key={product.productName}
                    name={product.productName}
                    value={product.productValue}
                    ingredients={product.productIngredients}
                />
            );
        });

        return (
            <div className="add-product-form container-fluid">
                <h1 className="display-4 mt-5 text-center">Add Products</h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, fuga!
                </p>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-9">
                        <form action="#">
                            { allProductFields }
                            <div className="form-group">
                                <button
                                    className="btn btn-primary form-control"
                                    type="button"
                                    onClick={() =>
                                        this.props.addProductHandler(
                                            {
                                                productName: "product" + (this.props.products.length + 1),
                                                productValue: "",
                                                productIngredients: [{
                                                    ingredientName: this.productName + ("ingredient" + 1),
                                                    ingredientValue: "",
                                                    ingredientFilename: this.productName + ("ingredientfile" + 1),
                                                    ingredientFilevalue:""
                                                }]
                                            }
                                        )
                                    }
                                >
                                    Add More Products
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default connect(mapStateToProps, { addProductHandler })(AddProductForm);
