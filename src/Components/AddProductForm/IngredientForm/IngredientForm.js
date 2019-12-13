import React, { Component } from "react";

export default class IngredientForm extends Component {
    render() {
        console.log(this.props.name);
        
        return (
            <React.Fragment>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name={this.props.name}
                            className="form-control"
                            id="formGroupExampleInput"
                            // value={this.props.value}
                            placeholder="Enter ingredient name"
                            // onChange={e =>
                            //     this.props.productTitleChangeHandler(e)
                            // }
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input form-control"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                title="Upload related document file"
                                name={this.props.filename}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile01"
                            >
                                Upload document
                            </label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
