import styles from "./Styles"
import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from "@material-ui/core/styles"
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux'
import {toggleDrawer} from "../../../Redux/Actions"


class SideBar extends Component {

    render() {
        console.log(this.props);
        
        const { classes } = this.props

        const sideList = () => {
            return (
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={(event)=>this.props.toggleDrawer(event,false)}
                    onKeyDown={(event)=>this.props.toggleDrawer(event,false)}
                >
                    <List>
                        <ListItem button key={"overview"}>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary={"Overview"}/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button key={"posts"}>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary={"Posts"}/>
                        </ListItem>
                    </List>
                </div>
            )
        }

        return (
            <SwipeableDrawer
                open={this.props.open}
                onClose={(event)=>this.props.toggleDrawer(event,false)}
                onOpen = {(event)=>this.props.toggleDrawer(event,true)}
            >
                {sideList()}
            </SwipeableDrawer>
        )
    }
}

const mapStateToProps = (state) => {
    return state.userReducer
}
export default connect(mapStateToProps,{toggleDrawer})(withStyles(styles)(SideBar))