import "./CompanyDetails.scss"
import React, { Component } from 'react'
import CompanyHeader from "../../../Components/Dashboard/CompanyDetails/CompanyHeader/CompanyHeader"
import CompanyBody from "../../../Components/Dashboard/CompanyDetails/CompanyBody/CompanyBody"
import { connect } from 'react-redux'
import { setSingleCompany,unsetSingleCompany } from "../../../Redux/Actions/companyActions"
import { withRouter } from "react-router-dom"
import { Backdrop, withStyles, CircularProgress } from "@material-ui/core"


const styles = theme => ({
    
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    
});

class CompanyDetails extends Component {
    componentDidMount() {
        let id = this.props.match.params.id
        if(id)
            this.props.setSingleCompany(id)
        else
            this.props.history.push("/admin/companies")
    }
    componentWillUnmount() {
        this.props.unsetSingleCompany()
    }

    render() {
        const { classes } = this.props
        return (
            <div className="company-details">
                <CompanyHeader company={this.props.company} />
                <CompanyBody company={this.props.company} error={this.props.error} />
                <Backdrop open={this.props.company || this.props.error?false:true} className={classes.backdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        company: state.companyReducer.company,
        error:state.companyReducer.error,
    }
}

export default connect(mapStateToProps, {setSingleCompany,unsetSingleCompany})(withStyles(styles)(withRouter(CompanyDetails)))