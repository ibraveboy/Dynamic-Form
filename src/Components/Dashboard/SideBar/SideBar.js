import styles from "./Styles";
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../Redux/Actions";
import { Hidden, Drawer, IconButton } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class SideBar extends Component {
    render() {
        const { classes } = this.props;
        const sideList = () => {
            return (
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={event => this.props.toggleDrawer(event, false)}
                    onKeyDown={event => this.props.toggleDrawer(event, false)}
                >
                    <List>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={event => this.props.toggleDrawer(event, false)}>
                                
                                    <ChevronLeftIcon />
                                
                            </IconButton>
                        </div>
                    </List>
                    <List>
                        <ListItem button key={"overview"}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Overview"} />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button key={"posts"}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Posts"} />
                        </ListItem>
                    </List>
                </div>
            );
        };

        return (
            <React.Fragment>
                <Hidden mdDown implementation="js">
                    <Drawer
                        variant="persistent"
                        open
                        anchor="left"
                        className={classes.list}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {sideList()}
                    </Drawer>
                </Hidden>
                <Hidden lgUp implementation="js">
                    <Drawer
                        variant="temporary"
                        open={this.props.open}
                        onClose={event => this.props.toggleDrawer(event, false)}
                        onOpen={event => this.props.toggleDrawer(event, true)}
                    >
                        {sideList()}
                    </Drawer>
                </Hidden>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state.userReducer;
};
export default connect(mapStateToProps, { toggleDrawer })(
    withStyles(styles)(SideBar)
);
