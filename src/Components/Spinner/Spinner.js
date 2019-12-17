import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./Spinner.scss"

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <Loader
                    width={100}
                    height={100}
                    color="#00BFFF"
                    type="Oval"
                    visible={true}
                />
            </div>
        )
    }
}
