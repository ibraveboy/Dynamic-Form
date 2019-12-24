import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Container,
    CardActions,
    Paper,
    InputBase,
    IconButton
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import "./Companies.css";
import CompanyGrid from "../../../Components/Dashboard/Companies/CompaniesGrid/CompanyGrid";

class Companies extends Component {
    render() {
        return (
            <div className="companies">
                <Typography variant="h2" align="center" className="page-title">
                    Companies
                </Typography>
                <Container>
                    <Grid container justify="center" className="search-bar">
                        <Grid item xs={6}>
                            <Paper component="form" className="search-wrapper">
                                <InputBase placeholder="Search Companies" className="search-input" />
                                <IconButton type="submit" className="" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} justify="center">
                       <CompanyGrid />
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, null)(Companies);
