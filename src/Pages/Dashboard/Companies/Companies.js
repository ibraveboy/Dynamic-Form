import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Typography,
    Grid,
    Container,
    Paper,
    InputBase,
    IconButton,
    withStyles,
    Backdrop,
    CircularProgress
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import "./Companies.scss";
import CompanyGrid from "../../../Components/Dashboard/Companies/CompaniesGrid/CompanyGrid";
import shortid from "shortid";
import { toggleCompanyLoader,companySearchHandler } from "../../../Redux/Actions/companyActions";



const styles = theme => ({
    
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    noResult: {
        marginTop:50,
    }
    
});

class Companies extends Component {
    state = {
        query:"",
    }
    
    onSearchChangeHandler = (event) => {
        this.setState({
            query:event.target.value
        })
    }
    
    searchHandler = (event) => {
        event.preventDefault()
        this.props.toggleCompanyLoader(true)
        this.props.companySearchHandler(this.state.query)
    }

    render() {
        let companies = this.props.companies.map(company => {
            return <CompanyGrid id={company.id} name={company.brand} date={company.date} certified={company.certified} img={company.img} key={shortid.generate()}/>
        })
        const { classes } = this.props;
        return (
            <div className="companies">
                <Typography variant="h2" align="center" className="page-title">
                    Companies
                </Typography>
                <Container>
                    <Grid container justify="center" className="search-bar">
                        <Grid item xs={6}>
                            <Paper component="form" className="search-wrapper" onSubmit={this.searchHandler}>
                                <InputBase placeholder="Search Companies" className="search-input" onChange={this.onSearchChangeHandler}/>
                                <IconButton type="button" className="" aria-label="search" onClick={this.searchHandler}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <Typography color="error">
                                {this.props.error}
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid container spacing={5} justify="center">
                        {companies.length ? companies : (
                            <Grid item xs={12}>
                                <Typography variant="h4" align="center" className={classes.noResult}>
                                    Oops! Nothing to show.
                                </Typography>
                            </Grid>
                       )}
                    </Grid>
                </Container>
                <Backdrop open={this.props.loader} className={classes.backdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.companyReducer;
};
export default connect(mapStateToProps,{toggleCompanyLoader,companySearchHandler})(withStyles(styles)(Companies));
