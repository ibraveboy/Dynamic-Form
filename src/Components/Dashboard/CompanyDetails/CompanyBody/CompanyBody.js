import "./CompanyBody.scss"
import React, { Component } from 'react'
import { Grid, Container, Paper, Typography } from '@material-ui/core'
import ContactPersonDetails from "../ContactPersonDetails/ContactPersonDetails";
// import LocationDetails from "../LocationDetails/LocationDetails";
import CertificationDetails from "../CertifcationDetails/CertificationDetails";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
export default class CompanyBody extends Component {
    render() {
        return (
            <Grid container className="company-body">
                <Grid item xs={12}>
                    <Container>
                        <Paper className="company-body-inner">
                            {this.props.error ? (
                                <Typography color="error">
                                    <ErrorOutlineIcon color="error" /> &nbsp;{this.props.error}
                                </Typography>
                            ):null}
                            <ContactPersonDetails company={this.props.company} />
                            <CertificationDetails company={this.props.company} />
                        </Paper> 
                    </Container>
                </Grid>
            </Grid>
        )
    }
}
