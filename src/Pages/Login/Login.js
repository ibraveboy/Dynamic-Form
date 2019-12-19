import React from "react";
import { connect } from 'react-redux'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loginUser, setUserError,toggleUserLoader } from "../../Redux/Actions";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { FormControl } from "@material-ui/core";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
});

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        showPassword: false,
    }

    onUserTextFieldChangeHandler = (e) => {
        this.props.setUserError({[e.target.name]:""})
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onLoginClickHandler = () => {
        this.props.toggleUserLoader()
        if (this.state.email === "" || this.state.password === "") {
            this.props.setUserError({email:"This field is required.",password:"This field is required."})
            return false
        }
        let user = {
            email: this.props.email,
            password:this.props.password
        }
        this.props.loginUser(user)
    }

    onInputBlurHandler = (e) => {
        if (e.target.value === "")
            this.props.setUserError({ [e.target.name]: "This field is required." })
        else
            this.props.setUserError({[e.target.name]:""})
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        })
    }

    handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            value={this.state.email}
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.onUserTextFieldChangeHandler}
                            error={this.props.errors["email"] ? true : false}
                            onBlur={this.onInputBlurHandler}
                            helperText={this.props.errors["email"]||""}
                        />
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                id="password"
                                autoComplete="current-password"
                                onChange={this.onUserTextFieldChangeHandler}
                                error={this.props.errors["password"] ? true : false}
                                onBlur={this.onInputBlurHandler}
                                helperText={this.props.errors["password"] || ""}
                                inputProps={
                                    {
                                        endAdornment:(<InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                                edge="end"
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                        </InputAdornment>)
                                    }
                                }
                               
                            />
                        </FormControl>
                        {/* <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        /> */}
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onLoginClickHandler}
                        >
                            Log In
                        </Button>
                        
                    </form>
                </div>
                <Backdrop open={this.props.loader} className={classes.backdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return state.userReducer
}
export default connect(mapStateToProps, {loginUser,setUserError,toggleUserLoader})(withStyles(styles)(Login));
