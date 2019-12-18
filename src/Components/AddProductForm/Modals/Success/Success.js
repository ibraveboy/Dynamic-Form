import { connect } from 'react-redux'
import { mapStateToProps } from "../../../../Helpers/helperMethods";
import React from 'react'
import "./Success.scss"
import { toggleSuccessModal } from '../../../../Redux/Actions';

function Success(props) {
    
    return (
        <div className={"success-modal "+(props.successModalVisibility?"":"hide")} >
            <div className="dark-overlay"></div>
            <div className="modal-wrapper text-center">
                <div className="display-3">
                    Done
                </div>
                <div className="modal-text h4">
                    {props.successModalText}
                </div>
                <div className="close-btn-wrapper">
                    <span
                        className="close-btn"
                        title="Close"
                        onClick={()=> props.toggleSuccessModal("")}
                    >
                        X
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,{toggleSuccessModal})(Success)