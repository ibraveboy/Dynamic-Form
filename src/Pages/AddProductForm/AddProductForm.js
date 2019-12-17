import "./AddProductForm.scss";
import shortId from "shortid";
import React, { Component } from "react";
// eslint-disable-next-line
import ProductForm from "../../Components/AddProductForm/ProductForm/ProductForm";
import { connect } from "react-redux";
import {
    addProductHandler,
    setError,
    setIntervalId,
    setFormData,
    setFormId,
    clearIntervalId
} from "../../Redux/Actions";
import {
    createIngredientFieldsObject,
    isProductEmpty
} from "../../Helpers/helperMethods";
import ChooseIngredient from "../../Components/AddProductForm/Modals/ChooseIngredient/ChooseIngredient";
import QuestionsList from "../../Components/AddProductForm/QuestionsForm/QuestionsList/QuestionsList";
import { withRouter } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";


class AddProductForm extends Component {
    state = {
        menuVisibility: false,
    };
    componentWillUnmount() {
        if(this.props.intervalId)
            this.props.clearIntervalId(this.props.intervalId)

    }
    componentDidMount() {
        
        if (this.props.match.params.id && !this.props._id ) {
            this.props.setFormData(this.props.match.params.id)
        } else {
            if (!this.props._id) {
                this.props.setFormId()
            }
            if (this.props.products.length === 0) {
                let ingredients = [
                    {
                        _id: shortId.generate(),
                        name: "",
                        specSheet: "",
                        supplierName: ""
                    }
                ];
                let name = "";
                this.props.addProductHandler({
                    _id: shortId.generate(),
                    name,
                    ingredients
                });
            }
        }
        
        if (!this.props.intervalId) {
            let intervalId = setInterval(() => {
                let productForms = localStorage.getItem("productForms");
                let productForm = {
                    _id: this.props._id,
                    products: this.props.products,
                    questions: this.props.questions
                };
                if (productForms) {
                    productForms = JSON.parse(productForms);
                    let index = productForms.findIndex(pf => {
                        return pf._id === productForm._id;
                    });
                    if (index > -1) {
                        productForms[index] = productForm;
                    } else {
                        productForms.push(productForm)
                    }
                } else {
                    productForms = []
                    productForms.push(productForm)
                }
                localStorage.setItem(
                    "productForms",
                    JSON.stringify(productForms)
                );
            }, 7000);
            this.props.setIntervalId(intervalId);
        }
    }

    

    addNewProduct = () => {
        let isEmpty = { isempty: false, errors: null };

        for (let i = 0; i < this.props.products.length; i++) {
            isEmpty = isProductEmpty(this.props.products[i]);
            if (isEmpty.isempty) {
                break;
            }
        }
        if (isEmpty.isempty) {
            alert("Fill All Products And Ingredients");
            this.props.setError(isEmpty.errors.key, isEmpty.errors.value);
            return false;
        }

        this.props.addProductHandler({
            _id: shortId.generate(),
            name: "",
            ingredients: [createIngredientFieldsObject()]
        });
    };

    render() {
        // Mapping Product Fields
        let allProductFields = this.props.products.map((product, index) => {
            return (
                <ProductForm
                    key={product._id}
                    value={product.name}
                    ingredients={product.ingredients}
                    productIndex={index}
                    id={product._id}
                />
            );
        });

        if (this.props._id) {
            
            return (
                <div className="add-product-form container-fluid">
                    <h1 className="display-4 mt-5 mb-5 text-center">Add Products</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9">
                            
                            <form action="#" className="add-form">
                                <div className="add-product-btn-wrapper">
                                    <span
                                        className="add-product-btn bg-primary"
                                        title="Add more products"
                                        onClick={
                                            this.addNewProduct
                                        }
                                    >
                                        
                                        Add New Product
                                    </span>
                                </div>
                                {allProductFields}
                                {/* <div className="form-group mb-0">
                                    <button
                                        className="btn btn-primary form-control"
                                        type="button"
                                        onClick={this.addNewProduct}
                                    >
                                        Add More Products
                                    </button>
                                </div> */} 
                            </form>
    
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="questions">
                                <div className="h5 font-weight-400 mb-4">
                                    Please answer following questions:
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <QuestionsList />
                                        <small>
                                            <b>
                                                Note:&nbsp;
                                            </b>
                                            All questions above are mandatory and company shouldn't be allowed to submit the form without filling in the data.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ChooseIngredient />
                </div>
            );
        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default withRouter(connect(mapStateToProps, {
    addProductHandler,
    setError,
    setIntervalId,
    setFormData,
    setFormId,
    clearIntervalId
})(AddProductForm));

