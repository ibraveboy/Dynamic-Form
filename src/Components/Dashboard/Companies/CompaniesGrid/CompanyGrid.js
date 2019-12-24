import React, { Component } from "react";
import "./CompanyGrid"
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
} from "@material-ui/core";

export default class CompanyGrid extends Component {
    render() {
        return (
            <Grid item xs={6} sm={4} md={3} className="company-card">
                <Card variant="outlined">
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5" className="company-title">
                                Company Title
                            </Typography>
                            <Typography variant="body2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Adipisci illo omnis quam, id
                                laboriosam molestias, maxime assumenda dolore,
                                doloribus totam ad porro quo iusto ea aspernatur
                                eaque non. Praesentium, nemo?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="subtitle2">
                                last action against company
                            </Typography>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}
