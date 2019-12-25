import React, { Component } from "react";
import "./CompanyGrid.css"
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
} from "@material-ui/core";
import img from "../../../../assets/avatar.png"

export default class CompanyGrid extends Component {
    render() {
        return (
            <Grid item xs={6} sm={4} md={3} className="company-card">
                <Card variant="outlined">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            alt={this.props.name}
                            src={this.props.img?this.props.img:img}
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
                            <Grid container justify="space-between" >
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" title="Certification Date">
                                        {(new Date(this.props.date)).toLocaleDateString()}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" title="Certified">
                                        {this.props.certified}%
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
