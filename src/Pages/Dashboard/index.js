import React, { Component, Fragment } from "react";
import Overview from "./Overview/Overview";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../../Components/Dashboard/NavBar/NavBar";
import SideBar from "../../Components/Dashboard/SideBar/SideBar";
import { withStyles } from "@material-ui/core";
import ToDoModal from "../../Components/Dashboard/Overview/Modals/ToDoModal/ToDoModal";
const styles = (theme)=>({
    sideContent: {
        transition: theme.transitions.create("margin"),
        marginLeft: 0,
        [theme.breakpoints.up("md")]: {
            marginLeft: 250,
        },
        
    }
})


class Dashboard extends Component {
    render() {
        let {classes} = this.props
        if (!this.props._id) {
            return <Redirect to="/login" />;
        }
        return (
            <Fragment>
                <NavBar />
                <SideBar />
                <div className={classes.sideContent}>
                    <Switch>
                        <Route path="/" component={Overview} />
                    </Switch>
                </div>
                <ToDoModal />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state.userReducer;
};

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard));
