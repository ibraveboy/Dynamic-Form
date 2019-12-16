import "./IngredientForm.scss";
import React, { Component } from "react";
import {
    ingredientFieldChangeHandler,
    setError,
    ingredientFileUpload
} from "../../../Redux/Actions";
import { connect } from "react-redux";
import FileIcon from "./file.png";
import TrashIcon from "./trash.png"

class IngredientForm extends Component {
    state = {
        error: null
    };
    onFileInputChangeHandler = e => {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            console.log(file);

            if (file.size / 1000000 > 2) {
                e.target.value = null;
                this.props.setError(
                    e.target.name,
                    "File must be less than 20mb"
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

    render() {
        const {
            name,
            errors,
            value,
            suppliername,
            suppliervalue,
            filename,
            filevalue
        } = this.props;
        console.log(filevalue);
        return (
            <div className="row ingredient">
                <div className="col-12 close-btn-wrapper">
                    <span
                        className="close-btn bg-danger"
                        title="Remove ingredient"
                    >
                        x
                    </span>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name={name}
                            className={
                                "form-control " +
                                (errors
                                    ? errors[name]
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
                    <div className="form-group">
                        <input
                            type="text"
                            name={suppliername}
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
                    <div className="form-group">
                        {!filevalue ? (
                            <React.Fragment>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className={
                                            "custom-file-input form-control " +
                                            (errors
                                                ? errors[filename]
                                                    ? "is-invalid"
                                                    : ""
                                                : "")
                                        }
                                        aria-describedby="inputGroupFileAddon01"
                                        title="Upload Supplier Spec Sheet/Statement"
                                        id={filename}
                                        name={filename}
                                        propertyname={"ingredientFilevalue"}
                                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={this.onFileInputChangeHandler}
                                    />
                                    <label
                                        className="custom-file-label"
                                        htmlFor={filename}
                                    >
                                        Upload Supplier Spec Sheet/Statement
                                    </label>
                                </div>
                                <small>
                                    <b>Note:</b> File must be less than 2MB.
                                </small>
                                {errors ? (
                                    errors[filename] ? (
                                        <div>
                                            <small className="text-danger">
                                                {errors[filename]}
                                            </small>
                                        </div>
                                    ) : null
                                ) : null}
                            </React.Fragment>
                        ) : (
                            <div className="d-flex">
                                <div className="file-selected col-12 px-4 py-3 d-flex flex-row">
                                        <div className="del-icon">
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
    return {
        errors: state.addProductReducer.errors
    };
};

export default connect(mapStateToProps, {
    ingredientFieldChangeHandler,
    setError,
    ingredientFileUpload
})(IngredientForm);
