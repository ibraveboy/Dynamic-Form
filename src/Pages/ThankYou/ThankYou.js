import React from 'react'
import { Link } from "react-router-dom"
import "./ThankYou.scss"

export default function ThankYou() {
    return (
        <div className="thank-you-page">
            <div className="thank-you text-center">
                <div className="display-2 thank-you-title">
                    Thank You!
                </div>
                <div className="thank-you-message">
                    Your form submission has recieved. You can go to <Link to="/">homepage</Link> 
                </div>
                {/* <div className="form-group">
                    <Link to="/" className="btn btn-primary">Goto Homepage</Link>
                </div> */}
            </div>

        </div>
    )
}
