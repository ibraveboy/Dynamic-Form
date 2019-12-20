import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { styles } from "./Styles";
import { toggleDrawer } from "../../../Redux/Actions";
import SideBar from "../SideBar/SideBar";

class NavBar extends Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null
    };

    handleProfileMenuOpen = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };
    handleMobileMenuClose = () => {
        this.setState({
            mobileMoreAnchorEl: null
        });
    };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({
            mobileMoreAnchorEl: event.currentTarget
        });
    };

    render() {
        const { classes } = this.props;
        const isMenuOpen = Boolean(this.state.anchorEl);
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
        const menuId = "primary-search-account-menu";

        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                id={menuId}
                keepMounted
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const mobileMenuId = "primary-search-account-menu-mobile";
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                id={mobileMenuId}
                keepMounted
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton
                        aria-label="show 11 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.grow}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={event => {
                                this.props.toggleDrawer(event, true);
                            }}
                            onKeyDown={event => {
                                this.props.toggleDrawer(event, true);
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Dashboard
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                aria-label="show 4 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                <SideBar />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.userReducer;
};

export default connect(mapStateToProps, { toggleDrawer })(
    withStyles(styles)(NavBar)
);
