import React, { Component } from 'react'
import { Grid, Typography, CircularProgress } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default class CertificationDetails extends Component {
    render() {
        return (
            <Grid container className="company-body-inner-item">
                <Grid item xs={12} className="inner-item-title">
                    <Typography gutterBottom variant="h5">
                        Certification Details
                    </Typography>
                </Grid>
                <Grid item container direction="row" className="inner-item-details" spacing={5}>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Last Certification Date
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.certification.lastCertificationDate? ((new Date(this.props.company.certification.lastCertificationDate)).toLocaleDateString()) :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Current Certification Date
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.certification.currentCertificationDate? ((new Date(this.props.company.certification.currentCertificationDate)).toLocaleDateString()) :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Total Amount
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.certification.applicationFee? `Application Fee ${this.props.company.certification.applicationFee} + Certification Fee ${this.props.company.certification.certificationFee} = ${Number(this.props.company.certification.certificationFee) + Number(this.props.company.certification.applicationFee)}` :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Status
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ?(this.props.company.certification.status? this.props.company.certification.status :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                    <Grid item className="inner-sub-item">
                        <Typography gutterBottom variant="caption" className="sub-item-title">
                            Certified
                        </Typography>
                        <Typography variant="subtitle2">
                            {this.props.company ? (this.props.company.certification.certified ? (this.props.company.certification.certified === 100 ? (<CheckCircleIcon color="primary" />) : (<Typography component="span">
                                <CircularProgress thickness={12} title={this.props.company.certification.certified + "%"} size={14} variant="static" value={this.props.company.certification.certified} /> {this.props.company.certification.certified + "%"}
                            </Typography>)) :"N/A"):"N/A"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
