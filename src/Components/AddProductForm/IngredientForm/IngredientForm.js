import "./IngredientForm.scss";
import React, { Component } from "react";
import {
    ingredientFieldChangeHandler,
    setError,
    ingredientFileUpload,
    deleteIngredientHandler,
    ingredientFileDelete
} from "../../../Redux/Actions";
import { connect } from "react-redux";
import FileIcon from "./file.png";
import TrashIcon from "./trash.png"
import shortid from "shortid";

class IngredientForm extends Component {
    state = {
        error: null
    };

    onFileInputChangeHandler = e => {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            if (file.size / 1000000 > 2) {
                e.target.value = null;
                this.props.setError(
                    (this.props.id+"-"+e.target.name),
                    "File must be less than 2MB"
                );
                return false;
            }
            this.props.ingredientFileUpload(
                file,
                e,
                this.props.productIndex,
                this.props.ingredientIndex
            );
        }
    };

    fileDelete = (file) => {
        if (window.confirm("This action cannot be undone. Are you sure?")) {
            this.props.ingredientFileDelete(file,this.props.productIndex,this.props.ingredientIndex)
        }
    }

    deleteIngredient = () => {

        if (window.confirm("This action cannot be undone. Do you really want to delete?")) {
            if (this.props.products[this.props.productIndex].ingredients.length === 1) { 
                alert("This product has only one attribute.")
                return false
            }
            this.props.deleteIngredientHandler(this.props.productIndex,this.props.ingredientIndex,this.props.id)
        } 

    }

    render() {
        const fileInputId = shortid.generate()
        const {
            errors,
            value,
            suppliervalue,
            filevalue
        } = this.props;
        return (
            <div className="row ingredient">
                <div className="col-12 close-btn-wrapper">
                    <span
                        className="close-btn bg-danger"
                        title="Remove ingredient"
                        onClick={this.deleteIngredient}
                    >
                        x
                    </span>
                </div>
                <div className="col-12 ingredient-title">
                    <div className="h6">
                        {this.props.ingredientIndex+1}. {value||"Ingredient Name"}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group ingredient-input">
                        <label>
                            Ingredient Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className={
                                "form-control " +
                                (errors
                                    ? errors[this.props.id+"-name"]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            value={value}
                            placeholder="Ingredient Name"
                            propertyname={"ingredientValue"}
                            onChange={e =>
                                this.props.ingredientFieldChangeHandler(
                                    e,
                                    this.props.productIndex,
                                    this.props.ingredientIndex
                                )
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group ingredient-input">
                        <label>
                            Supplier Name:
                        </label>
                        <input
                            type="text"
                            name="supplierName"
                            className="form-control"
                            value={suppliervalue}
                            placeholder="Supplier Name"
                            propertyname={"ingredientSupplierValue"}
                            onChange={e =>
                                this.props.ingredientFieldChangeHandler(
                                    e,
                                    this.props.productIndex,
                                    this.props.ingredientIndex
                                )
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group ingredient-input">
                        <label>
                            Supplier Spec Sheet/Statement
                        </label>
                        {!filevalue ? (
                            <React.Fragment>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className={
                                            "custom-file-input form-control " +
                                            (errors
                                                ? errors[this.props.id+"-specSheet"]
                                                    ? "is-invalid"
                                                    : ""
                                                : "")
                                        }
                                        id={fileInputId}
                                        title="Upload Supplier Spec Sheet/Statement"
                                        name="specSheet"
                                        propertyname={"ingredientFilevalue"}
                                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.jpeg,.pdf"
                                        onChange={this.onFileInputChangeHandler}
                                    />
                                    <label
                                        className="custom-file-label"
                                        htmlFor={fileInputId}
                                    >
                                        Upload Supplier Spec Sheet/Statement
                                    </label>
                                </div>
                                <small>
                                    <b>Note:</b> File must be less than 2MB.
                                </small>
                                {errors ? (
                                    errors[this.props.id+"-specSheet"] ? (
                                        <div>
                                            <small className="text-danger">
                                                {errors[this.props.id+"-specSheet"]}
                                            </small>
                                        </div>
                                    ) : null
                                ) : null}
                            </React.Fragment>
                        ) : (
                            <div className="d-flex">
                                <div className="file-selected col-12 px-4 py-3 d-flex flex-row">
                                        <div
                                            className="del-icon"
                                            onClick={()=>this.fileDelete(filevalue)}
                                        >
                                            <div className="overlay"></div>
                                            <div className="icon-wrapper">
                                                <img src={TrashIcon} alt="trash icon"/>
                                            </div>
                                        </div>
                                    <div className="file-icon">
                                        <img
                                            src={FileIcon}
                                            alt="File Icon"
                                        />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mb-0">
                                            <b>{filevalue.name}</b>
                                        </p>
                                        <small>
                                            Filesize : {filevalue.size}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.addProductReducer
};

export default connect(mapStateToProps, {
    ingredientFieldChangeHandler,
    setError,
    ingredientFileUpload,
    deleteIngredientHandler,
    ingredientFileDelete
})(IngredientForm);
