import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import ToDo from '../../../Components/Dashboard/Overview/ToDo/ToDo'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Typography variant="h2" align="center" >
                    Overview
                </Typography>
                <ToDo />
            </div>
        )
    }
}
