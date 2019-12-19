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
    clearIntervalId,
    saveFormData,
    toggleSuccessModal,
    toggleLoader
} from "../../Redux/Actions";
import { isProductEmpty, btnShouldEnabled } from "../../Helpers/helperMethods";
import ChooseIngredient from "../../Components/AddProductForm/Modals/ChooseIngredient/ChooseIngredient";
import QuestionsList from "../../Components/AddProductForm/QuestionsForm/QuestionsList/QuestionsList";
import { withRouter } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

class AddProductForm extends Component {
    state = {
        menuVisibility: false
    };
    componentWillUnmount() {
        if (this.props.intervalId)
            this.props.clearIntervalId(this.props.intervalId);
    }
    componentDidUpdate() {
        if (this.props.successModalVisibility)
        {
            this.props.toggleSuccessModal("")
            this.props.history.push("/thankyou")
        }
    }
    componentDidMount() {
        if (this.props.match.params.id && !this.props._id) {
            this.props.setFormData(
                this.props.match.params.id,
                this.props.history
            );
        } else {
            
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
                
                //uncomment the below line of code to sent data to api after 7s
                // in redux/actions/index is the funtion where you can add API link

                // this.props.saveFormData(productForm)
                
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
            ingredients: []
        });
    };

    submitButtonHandler = () => {
        this.props.toggleLoader()
        let productForm = {
            _id: this.props._id,
            products: this.props.products,
            questions: this.props.questions
        };
        this.props.saveFormData(productForm);
    };


    render() {
        
        let enable = btnShouldEnabled(this.props);
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

        if (this.props._id && !this.props.loaderVisible) {
            return (
                <div className="add-product-form container-fluid">
                    <h1 className="display-4 mt-5 mb-5 text-center">
                        Add Products
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9">
                            <form action="#" className="add-form">
                                <div className="add-product-btn-wrapper">
                                    <span
                                        className="add-product-btn bg-primary"
                                        title="Add more products"
                                        onClick={this.addNewProduct}
                                    >
                                        Add New Product
                                    </span>
                                </div>
                                <div className="note-at-top">
                                    <p className="text-justify">
                                        For each product, list <b> ALL </b>{" "}
                                        ingredients and supplier names
                                        (including source ingredients,
                                        manufactured ingredients, and GMO
                                        ingredients that may involve animal
                                        substances). Please also include ALL
                                        <b> insignificant</b> ingredients ({" "}
                                        <span className="text-danger">
                                            {" "}
                                            including those weighing less than
                                            0.5 grams per serving{" "}
                                        </span>{" "}
                                        ) and <b>incidental </b>
                                        ingredients ({" "}
                                        <span className="text-danger">
                                            {" "}
                                            ingredients that could have
                                            incidentally ended up in the final
                                            product during the manufacturing or
                                            production process.{" "}
                                        </span>{" "}
                                        )
                                    </p>
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
                        <div className="col-12 col-lg-9">
                            <div className="questions">
                                <div className="h5 font-weight-400 mb-4">
                                    Please answer following questions:
                                </div>
                                <div className="row">
                                    <form className="col-12">
                                        <QuestionsList />
                                        <small>
                                            <b>Note:&nbsp;</b>
                                            All questions above are mandatory
                                            and company shouldn't be allowed to
                                            submit the form without filling in
                                            the data.
                                        </small>
                                        <div className="form-group mt-3">
                                            <button
                                                type="button"
                                                onClick={this.submitButtonHandler}
                                                className={
                                                    "btn btn-lg" +
                                                    (enable
                                                        ? " btn-primary"
                                                        : " btn-dark")
                                                }
                                                disabled={!enable}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ChooseIngredient />
                </div>
            );
        } else {
            return <Spinner />;
        }
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default withRouter(
    connect(mapStateToProps, {
        addProductHandler,
        setError,
        setIntervalId,
        setFormData,
        setFormId,
        clearIntervalId,
        saveFormData,
        toggleSuccessModal,
        toggleLoader
    })(AddProductForm)
);
