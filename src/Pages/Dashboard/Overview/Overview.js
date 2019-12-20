import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import NavBar from '../../../Components/Dashboard/NavBar/NavBar'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Typography variant="h2" align="center">
                    Dashboard
                </Typography>
            </div>
        )
    }
}
