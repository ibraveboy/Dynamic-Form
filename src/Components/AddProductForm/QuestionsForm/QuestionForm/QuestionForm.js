import React, { Component } from "react";
import { connect } from 'react-redux'
import FileIcon from "./file.png";
import TrashIcon from "./trash.png"
import { answerTextChangeHandler,setError,answerFileChangeHandler } from "../../../../Redux/Actions";

class QuestionForm extends Component {
    
    render() {
        const {errors} = this.props
        
        if (this.props.index === 4 || this.props.index === 7) {
            return (
                <li className="text-justify">
                    {this.props.question}
                    <div className="form-group mt-3">
                        {this.props.answer ? (
                            <React.Fragment>
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
                                            <b>{this.props.answer.name}</b>
                                        </p>
                                        <small>
                                            Filesize : {this.props.answer.size}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <input
                                        type="file"
                                        name={this.props.name}
                                        className={"form-control form-control-file "+
                                        (errors
                                            ? errors[this.props.name]
                                                ? "is-invalid"
                                                : ""
                                            : "")}
                                        placeholder="Upload"
                                        onChange={this.answerFileUpload}
                                    />
                                    <small>
                                        <b>Note:</b> File must be less than 2MB.
                                    </small>
                                    {errors ? (
                                        errors[this.props.name] ? (
                                            <div>
                                                <small className="text-danger">
                                                    {errors[this.props.name]}
                                                </small>
                                            </div>
                                        ) : null
                                    ) : null}
                                </React.Fragment>   
                        )}
                    </div>
                </li>
            );
        } else if (this.props.index === 5 || this.props.index === 6) {
            return (
                <li className="text-justify">
                    {this.props.question}
                    <div className="custom-control custom-radio  mt-3">
                        <input
                            className={"custom-control-input" +
                                (errors
                                    ? errors[this.props.naem]
                                        ? "is-invalid"
                                        : ""
                                    : "")}
                            type="radio"
                            name={this.props.name}
                            value="yes"
                            id={"radio1"+this.props.index}
                            onChange={(e)=>{this.props.answerTextChangeHandler(e,this.props.index)}}
                            checked={this.props.answer === "yes" ? true : false}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio1"+this.props.index}
                        >
                            Yes
                        </label>
                    </div>
                    <div className="custom-control custom-radio  mb-3">
                        <input
                            className={"custom-control-input" +
                                (errors
                                    ? errors[this.props.naem]
                                        ? "is-invalid"
                                        : ""
                                    : "")}
                            type="radio"
                            name={this.props.name}
                            value="no"
                            id={"radio2"+this.props.index}
                            onChange={(e)=>{this.props.answerTextChangeHandler(e,this.props.index)}}
                            checked={this.props.answer === "no" ? true : false}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"radio2"+this.props.index}
                        >
                            No
                        </label>
                    </div>
                </li>
            );
        }
        return (
            <li className="text-justify">
                {this.props.question}
                <div className="form-group mt-3">
                    <textarea
                        name={this.props.name}
                        rows="5"
                        className={"form-control "+
                        (errors
                            ? errors[this.props.name]
                                ? "is-invalid"
                                : ""
                            : "")}
                        value={this.props.answer}
                        onChange={(e)=>{this.props.answerTextChangeHandler(e,this.props.index)}}
                    ></textarea>
                </div>
            </li>
        );
    }
}

export default connect(null,{answerTextChangeHandler,setError,answerFileChangeHandler})(QuestionForm)