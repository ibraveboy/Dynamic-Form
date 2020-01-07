import React, { Component } from 'react'
import { Grid,Typography } from '@material-ui/core'

export default class LocationDetails extends Component {
    render() {
        return (
            <Grid container className="company-body-inner-item">
                <Grid item xs={12} className="inner-item-title">
                    <Typography gutterBottom variant="h5">
                        Location Details
                    </Typography>
                </Grid>
                <Grid item container direction="row" className="inner-item-details" spacing={5}>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Street Number
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.streetNumber? this.props.company.geo.streetNumber :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Postal Code
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.postalCode? this.props.company.geo.postalCode :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            City/Village
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.city? this.props.company.geo.city :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Sub-District
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.subPremise ? this.props.company.subPremise  :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            District
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.district? this.props.company.geo.district :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            State/Province
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.state? this.props.company.geo.state :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Latitude
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.lat? this.props.company.geo.lat :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Longitude
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.lng? this.props.company.geo.lng :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Country
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.geo.country? this.props.company.geo.country :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
