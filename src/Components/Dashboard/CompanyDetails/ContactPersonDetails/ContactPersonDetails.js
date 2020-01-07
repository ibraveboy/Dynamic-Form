import React, { Component } from 'react'
import { Grid,Typography } from '@material-ui/core'

export default class ContactPersonDetails extends Component {
    render() {
        return (
            <Grid container className="company-body-inner-item">
                <Grid item xs={12} className="inner-item-title">
                    <Typography gutterBottom variant="h5">
                        Contact Person Details
                    </Typography>
                </Grid>
                <Grid item container direction="row" className="inner-item-details" spacing={5}>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Name
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.contactPerson.name? this.props.company.contactPerson.name :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Contact No.
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.contactPerson.phone? this.props.company.contactPerson.phone :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Email
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.contactPerson.email? this.props.company.contactPerson.email :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
