import React, { Component } from "react";
import {
    Grid,
    Typography,
    Divider,
    Avatar,
    Container
} from "@material-ui/core";
import "./CompanyHeader.scss";
import img from "../../../../assets/avatar.png";

export default class CompanyHeader extends Component {
    render() {
        return (
            <Grid container className="company-header">
                <Grid item xs={12}>
                    <Container>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <Typography
                                    gutterBottom
                                    className="company-header-title"
                                >
                                    Company Profile
                                </Typography>
                                <Divider
                                    variant="fullWidth"
                                    className="company-header-divider"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justify="space-between"
                            >
                                <Grid item>
                                    <Grid container direction="row">
                                        <Grid item xs={"auto"}>
                                            <Avatar
                                                imgProps={{
                                                    style: {
                                                        height:"auto"
                                                    }
                                                }}
                                                src={
                                                    this.props.company
                                                        ? this.props.company
                                                              .logo
                                                            ? this.props.company
                                                                  .logo
                                                            : img
                                                        : img
                                                }
                                                className="company-header-avatar"
                                            />
                                        </Grid>
                                        <Grid item xs={"auto"}>
                                            <Grid
                                                item
                                                container
                                                direction="column"
                                                justify="space-between"
                                                className="company-header-details"
                                            >
                                                <Grid
                                                    item
                                                    xs={12}
                                                    className="company-header-detail"
                                                >
                                                    <Typography className="company-header-title company-header-sub-title">
                                                        Company Name
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        {this.props.company
                                                            ? this.props.company
                                                                  .name
                                                                ? this.props
                                                                      .company
                                                                      .name
                                                                : "N/A"
                                                            : "N/A"}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    className="company-header-detail"
                                                >
                                                    <Typography className="company-header-title company-header-sub-title">
                                                        Brand Representative
                                                        Name
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        {this.props.company
                                                            ? this.props.company
                                                                  .contactPerson
                                                                  .name
                                                                ? this.props
                                                                      .company
                                                                      .contactPerson
                                                                      .name
                                                                : "N/A"
                                                            : "N/A"}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    className="company-header-detail"
                                                >
                                                    <Typography className="company-header-title company-header-sub-title">
                                                        Contact Email
                                                    </Typography>
                                                    <Typography variant="h6">
                                                        {this.props.company
                                                            ? this.props.company
                                                                  .site
                                                                  .emailAddresses
                                                                ? this.props.company.site.emailAddresses.join(
                                                                      ", "
                                                                  )
                                                                : "N/A"
                                                            : "N/A"}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid item xs={"auto"}>
                                        <Grid item container direction="column">
                                            <Grid
                                                item
                                                xs={12}
                                                className="company-header-detail"
                                            >
                                                <Typography className="company-header-title company-header-sub-title">
                                                    Location
                                                </Typography>
                                                <Typography variant="h6">
                                                    {this.props.company
                                                        ? this.props.company
                                                              .location
                                                            ? this.props.company
                                                                  .location
                                                            : "N/A"
                                                        : "N/A"}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        );
    }
}
