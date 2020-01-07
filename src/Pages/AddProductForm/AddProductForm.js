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
  toggleLoader,
  setRepresentativeSign,
  setAcceptTerms,
  sendAffidavitPDF
} from "../../Redux/Actions";
import { isProductEmpty, btnShouldEnabled } from "../../Helpers/helperMethods";
import ChooseIngredient from "../../Components/AddProductForm/Modals/ChooseIngredient/ChooseIngredient";
import QuestionsList from "../../Components/AddProductForm/QuestionsForm/QuestionsList/QuestionsList";
import { withRouter } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import CertificationApplication from "../CertificationApplication/CertificationApplication";
import SignatureCanvas from "react-signature-canvas";
import Modal from "@material-ui/core/Modal";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Application from "../../Components/CertificationApplication/Application/Application";

class AddProductForm extends Component {
  state = {
    menuVisibility: false,
    signaturePad: false,
    pdfViewer: false
  };
  sigCanvas = null;
  componentWillUnmount() {
    if (this.props.intervalId)
      this.props.clearIntervalId(this.props.intervalId);
  }
  componentDidUpdate() {
    if (this.props.successModalVisibility) {
      this.props.toggleSuccessModal("");
      this.props.history.push("/thankyou");
    }
  }
  componentDidMount() {
    if (this.props.match.params.id && !this.props._id) {
      this.props.setFormData(this.props.match.params.id, this.props.history);
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

  // set Representative Signature

  setRepresentativeSign = () => {
    if (this.sigCanvas) {
      let sigCanvasTrim = this.sigCanvas.getTrimmedCanvas();
      if (sigCanvasTrim.width > 0 && sigCanvasTrim.height > 0) {
        this.props.setRepresentativeSign(sigCanvasTrim.toDataURL());
      }
    }
  };

  submitButtonHandler = () => {
    if (!this.props.affidavitBlob) {
      alert("Sign the affidavit please.");
      return false;
    }
    this.props.toggleLoader();
    this.props.sendAffidavitPDF(this.props.affidavitBlob);
    let productForm = new FormData();
    productForm.append("_id", this.props._id);
    productForm.append("products", this.props.products);
    productForm.append("questions", this.props.questions);
    productForm.append("affidavitState", this.props.affidavitState);
    productForm.append("country", this.props.country);
    productForm.append("companyName", this.props.companyName);
    productForm.append("representativeName", this.props.representativeName);
    productForm.append(
      "representativeSignature",
      this.props.representativeSignature
    );
    productForm.append("affidavit", this.props.affidavit);
    productForm.append("acceptTerm", this.props.acceptTerm);

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
          <h1 className="display-4 mt-5 mb-5 text-center">Add Products</h1>
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
                    For each product, list <b> ALL </b> ingredients and supplier
                    names (including source ingredients, manufactured
                    ingredients, and GMO ingredients that may involve animal
                    substances). Please also include ALL
                    <b> insignificant</b> ingredients ({" "}
                    <span className="text-danger">
                      {" "}
                      including those weighing less than 0.5 grams per serving{" "}
                    </span>{" "}
                    ) and <b>incidental </b>
                    ingredients ({" "}
                    <span className="text-danger">
                      {" "}
                      ingredients that could have incidentally ended up in the
                      final product during the manufacturing or production
                      process.{" "}
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
                    <div className="affidavit">
                      <span
                        className="aggreement-text text-primary"
                        onClick={() => {
                          this.setState({ pdfViewer: true });
                        }}
                      >
                        Aggreement affidavit and privacy policy
                      </span>
                      <CertificationApplication />
                    </div>
                    <div className="signature-pad">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.props.acceptTerm}
                              value="true"
                              color="primary"
                              onChange={params => {
                                if (params.target.checked) {
                                  this.props.setAcceptTerms(true);
                                  this.setState({
                                    signaturePad: true
                                  });
                                } else {
                                  this.props.setAcceptTerms(false);
                                }
                              }}
                            />
                          }
                          label="I accept all the terms and conditions."
                        />
                      </FormGroup>

                      <Modal open={this.state.signaturePad}>
                        <div className="signature-pad-wrapper">
                          <div className="bg-white p-5">
                            <div className="h1 text-center">
                              Please sign here.
                            </div>
                            <SignatureCanvas
                              ref={ref => {
                                this.sigCanvas = ref;
                              }}
                              onEnd={this.setRepresentativeSign}
                              penColor="black"
                              canvasProps={{
                                width: 325,
                                height: 200,
                                className: "sigCanvas"
                              }}
                            />
                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  this.setState({
                                    signaturePad: false
                                  });
                                }}
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        </div>
                      </Modal>
                      <Modal
                        open={this.state.pdfViewer}
                        onClose={() => {
                          this.setState({ pdfViewer: false });
                        }}
                      >
                        <div className="signature-pad-wrapper">
                          <span
                            style={{
                              position: "absolute",
                              fontSize: 32,
                              color: "red",
                              top: 40,
                              right: 50,
                              cursor: "pointer",
                              fontWeight: "bolder",
                              zIndex: 200
                            }}
                            onClick={() => {
                              this.setState({ pdfViewer: false });
                            }}
                          >
                            x
                          </span>
                          <Application />
                        </div>
                      </Modal>
                    </div>
                    <small>
                      <b>Note:&nbsp;</b>
                      All questions above are mandatory and company shouldn't be
                      allowed to submit the form without filling in the data.
                    </small>
                    <div className="form-group mt-3">
                      <button
                        type="button"
                        onClick={this.submitButtonHandler}
                        className={
                          "btn btn-lg" + (enable ? " btn-primary" : " btn-dark")
                        }
                        disabled={!enable}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-12"></div>
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
    toggleLoader,
    setRepresentativeSign,
    setAcceptTerms,
    sendAffidavitPDF
  })(AddProductForm)
);
