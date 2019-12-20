import React, { Component } from 'react'
import Overview from './Overview/Overview'
import { Switch,Route } from "react-router-dom"
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom"

class Dashboard extends Component {
    render() {
        if (!this.props._id) {
            return <Redirect to="/login" />
        }
        return (
            <Switch>
                <Route path="/" component={Overview} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return state.userReducer;
}

export default connect(mapStateToProps,null)(Dashboard);