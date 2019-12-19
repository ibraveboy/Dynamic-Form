import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../../../Helpers/helperMethods";
import "./QuestionsList.scss";
import FileIcon from "./file.png";
import TrashIcon from "./trash.png";
import {
    answerTextChangeHandler,
    setError,
    answerFileChangeHandler,
    answerFileDeleteHandler,
    toggleLoader
} from "../../../../Redux/Actions";

class QuestionsList extends Component {
    answerFileDelete = (file, index) => {
        if (window.confirm("This action cannot be undone. Are you sure?")) {
            this.props.answerFileDeleteHandler(file, index);
        }
    };
    answerFileUpload = (e, index) => {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            if (file.size / 1000000 > 2) {
                e.target.value = null;
                this.props.setError(
                    this.props.name,
                    "File must be less than 2MB"
                );
                return false;
            }
            this.props.answerFileChangeHandler(e, file, index);
        }
    };

    render() {
        const { errors } = this.props;
        let questions = getQuestions();

        return (
            <ol className="q-list">
                <li className="text-justify">
                    {questions[this.props.questions[0].name]}
                    <div className="form-group mt-3">
                        <textarea
                            name={this.props.questions[0].name}
                            rows="5"
                            className={
                                "form-control " +
                                (errors
                                    ? errors[this.props.questions[0].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            value={this.props.questions[0].answer}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 0);
                            }}
                        ></textarea>
                    </div>
                </li>
                <li className="text-justify">
                    {questions[this.props.questions[1].name]}
                    <div className="form-group mt-3">
                        <textarea
                            name={this.props.questions[1].name}
                            rows="5"
                            className={
                                "form-control " +
                                (errors
                                    ? errors[this.props.questions[1].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            value={this.props.questions[1].answer}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 1);
                            }}
                        ></textarea>
                    </div>
                </li>
                <li className="text-justify">
                    {questions[this.props.questions[2].name]}
                    <div className="form-group mt-3">
                        <textarea
                            name={this.props.questions[2].name}
                            rows="5"
                            className={
                                "form-control " +
                                (errors
                                    ? errors[this.props.questions[2].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            value={this.props.questions[2].answer}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 2);
                            }}
                        ></textarea>
                    </div>
                </li>
                <li className="text-justify">
                    {questions[this.props.questions[3].name]}
                    <div className="form-group mt-3">
                        <textarea
                            name={this.props.questions[3].name}
                            rows="5"
                            className={
                                "form-control " +
                                (errors
                                    ? errors[this.props.questions[3].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            value={this.props.questions[3].answer}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 3);
                            }}
                        ></textarea>
                    </div>
                </li>
                <li className="text-justify">
                    {questions[this.props.questions[4].name]}
                    <div className="form-group mt-3">
                        {this.props.questions[4].answer ? (
                            <React.Fragment>
                                <div className="d-flex">
                                    <div className="file-selected col-12 px-4 py-3 d-flex flex-row">
                                        <div
                                            className="del-icon"
                                            onClick={() =>
                                                this.answerFileDelete(
                                                    this.props.questions[4]
                                                        .answer,
                                                    4
                                                )
                                            }
                                        >
                                            <div className="overlay"></div>
                                            <div className="icon-wrapper">
                                                <img
                                                    src={TrashIcon}
                                                    alt="trash icon"
                                                />
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
                                                <b>
                                                    {
                                                        this.props.questions[4]
                                                            .answer.name
                                                    }
                                                </b>
                                            </p>
                                            <small>
                                                Filesize :{" "}
                                                {
                                                    this.props.questions[4]
                                                        .answer.size
                                                }
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input
                                    type="file"
                                    name={this.props.questions[4].name}
                                    className={
                                        "form-control form-control-file " +
                                        (errors
                                            ? errors[
                                                  this.props.questions[4].name
                                              ]
                                                ? "is-invalid"
                                                : ""
                                            : "")
                                    }
                                    placeholder="Upload"
                                    onChange={e => this.answerFileUpload(e, 4)}
                                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.jpeg,.pdf"
                                />
                                <small>
                                    <b>Note:</b> File must be less than 2MB.
                                </small>
                                {errors ? (
                                    errors[this.props.questions[4].name] ? (
                                        <div>
                                            <small className="text-danger">
                                                {
                                                    errors[
                                                        this.props.questions[4]
                                                            .name
                                                    ]
                                                }
                                            </small>
                                        </div>
                                    ) : null
                                ) : null}
                            </React.Fragment>
                        )}
                    </div>
                </li>

                <li className="text-justify">
                    {questions[this.props.questions[5].name]}
                    <div className="custom-control custom-radio  mt-3">
                        <input
                            className={
                                "custom-control-input" +
                                (errors
                                    ? errors[this.props.questions[5].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            type="radio"
                            name={this.props.questions[5].name}
                            value="yes"
                            id={"radio1" + 5}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 5);
                            }}
                            checked={
                                this.props.questions[5].answer === "yes"
                                    ? true
                                    : false
                            }
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio1" + 5}
                        >
                            Yes
                        </label>
                    </div>
                    <div className="custom-control custom-radio  mb-3">
                        <input
                            className={
                                "custom-control-input" +
                                (errors
                                    ? errors[this.props.questions[5].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            type="radio"
                            name={this.props.questions[5].name}
                            value="no"
                            id={"radio2" + 5}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 5);
                            }}
                            checked={
                                this.props.questions[5].answer === "no"
                                    ? true
                                    : false
                            }
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio2" + 5}
                        >
                            No
                        </label>
                    </div>
                </li>

                <li className="text-justify">
                    {questions[this.props.questions[6].name]}
                    <div className="custom-control custom-radio  mt-3">
                        <input
                            className={
                                "custom-control-input" +
                                (errors
                                    ? errors[this.props.questions[6].name]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            type="radio"
                            name={this.props.questions[6].name}
                            value="yes"
                            id={"radio1" + 6}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 6);
                            }}
                            checked={
                                this.props.questions[6].answer === "yes"
                                    ? true
                                    : false
                            }
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio1" + 6}
                        >
                            Yes
                        </label>
                    </div>
                    <div className="custom-control custom-radio  mb-3">
                        <input
                            className={
                                "custom-control-input" +
                                (errors
                                    ? errors[this.props.questions[6].naem]
                                        ? "is-invalid"
                                        : ""
                                    : "")
                            }
                            type="radio"
                            name={this.props.questions[6].name}
                            value="no"
                            id={"radio2" + 6}
                            onChange={e => {
                                this.props.answerTextChangeHandler(e, 6);
                            }}
                            checked={
                                this.props.questions[6].answer === "no"
                                    ? true
                                    : false
                            }
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio2" + 6}
                        >
                            No
                        </label>
                    </div>
                </li>

                <li className="text-justify">
                    {questions[this.props.questions[7].name]}
                    <div className="form-group mt-3">
                        {this.props.questions[7].answer ? (
                            <React.Fragment>
                                <div className="d-flex">
                                    <div className="file-selected col-12 px-4 py-3 d-flex flex-row">
                                        <div
                                            className="del-icon"
                                            onClick={() =>
                                                this.answerFileDelete(
                                                    this.props.questions[7]
                                                        .answer,
                                                    7
                                                )
                                            }
                                        >
                                            <div className="overlay"></div>
                                            <div className="icon-wrapper">
                                                <img
                                                    src={TrashIcon}
                                                    alt="trash icon"
                                                />
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
                                                <b>
                                                    {
                                                        this.props.questions[7]
                                                            .answer.name
                                                    }
                                                </b>
                                            </p>
                                            <small>
                                                Filesize :{" "}
                                                {
                                                    this.props.questions[7]
                                                        .answer.size
                                                }
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input
                                    type="file"
                                    name={this.props.questions[7].name}
                                    className={
                                        "form-control form-control-file " +
                                        (errors
                                            ? errors[
                                                  this.props.questions[7].name
                                              ]
                                                ? "is-invalid"
                                                : ""
                                            : "")
                                    }
                                    placeholder="Upload"
                                    onChange={e => this.answerFileUpload(e, 7)}
                                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.jpeg,.pdf"
                                />
                                <small>
                                    <b>Note:</b> File must be less than 2MB.
                                </small>
                                {errors ? (
                                    errors[this.props.questions[7].name] ? (
                                        <div>
                                            <small className="text-danger">
                                                {
                                                    errors[
                                                        this.props.questions[7]
                                                            .name
                                                    ]
                                                }
                                            </small>
                                        </div>
                                    ) : null
                                ) : null}
                            </React.Fragment>
                        )}
                    </div>
                </li>
            </ol>
        );
    }
}

const mapStateToProps = state => {
    return state.addProductReducer;
};

export default connect(mapStateToProps, {
    answerTextChangeHandler,
    setError,
    answerFileChangeHandler,
    answerFileDeleteHandler,
    toggleLoader
})(QuestionsList);
