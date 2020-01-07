import React, { Component } from "react";
import "./CompanyGrid.scss"
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    withStyles,
    Divider
} from "@material-ui/core";
import img from "../../../../assets/cancel-image.png"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withRouter } from "react-router-dom";

const Styles = {
    divider: {
        marginTop: 20,
        marginBottom:20,
    },
    card: {
        maxWidth: 300,
        minWidth:200,
    },
    media: {
        height: 140,
        backgroundSize:"contain",
    },
  };

class CompanyGrid extends Component {
    goToCompanyDetails = (id) => {
        this.props.history.push("/admin/company/"+id)
    }
    render() {
        const { classes } = this.props
        return (
            <Grid item className="company-card">
                <Card variant="outlined" className={classes.card}>
                    <CardActionArea onClick={() => { this.goToCompanyDetails(this.props.id) }}>
                        <CardMedia
                            className={classes.media}
                            alt={this.props.name}
                            image={this.props.img?this.props.img:img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" className="company-title">
                                {this.props.name}
                            </Typography>
                            <Typography gutterBottom variant="body2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Adipisci illo omnis quam, id
                                laboriosam molestias, maxime assumenda dolore,
                                doloribus totam ad porro quo iusto ea aspernatur
                                eaque non. Praesentium, nemo?
                            </Typography>
                            <Divider variant="fullWidth" className={classes.divider} />
                            <Grid container justify="space-between" >
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" title="Certification Date">
                                        {this.props.date ? (new Date(this.props.date)).toLocaleDateString():"N/A"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" title="Certified">
                                        {this.props.certified === "100" ? (<CheckCircleIcon color="primary"/>):(this.props.certified+"%")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* <CardActions>
                            <Typography variant="subtitle2">
                                last action against company
                            </Typography>
                        </CardActions> */}
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}

export default withRouter(withStyles(Styles)(CompanyGrid))
