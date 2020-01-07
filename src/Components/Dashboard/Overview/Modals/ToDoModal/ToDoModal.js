import { connect } from "react-redux";
import React, { Component } from "react";
import { Modal, Typography, Paper, Grid } from "@material-ui/core";
import { hideToDo } from "../../../../../Redux/Actions";
import "./TodoModal.scss";

class ToDoModal extends Component {
    render() {
        return (
            <Modal
                open={this.props.todoModal.visible}
                onClose={this.props.hideToDo}
                className="todo-modal"
            >
                <Paper className="todo-content">
                    <Typography
                        variant="h3"
                        component="h1"
                        className="todo-title"
                    >
                        {this.props.todoModal.todo
                            ? this.props.todoModal.todo.title
                            : "Todo Title"}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className="todo-desc"
                    >
                        {this.props.todoModal.todo
                            ? this.props.todoModal.todo.description
                            : "Todo Description"}
                    </Typography>
                    <Grid container justify="space-between">
                        <Grid item xs={6}>
                            <Typography variant="caption">
                                {this.props.todoModal.todo
                                    ? new Date(
                                          this.props.todoModal.todo.date
                                      ).toLocaleDateString()
                                    : "Todo Deadline"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                {this.props.todoModal.todo
                                    ? this.props.todoModal.todo.complete
                                        ? (this.props.todoModal.todo.complete === "started"?"started":"completed")
                                        : ("pending")
                                    : "Todo Status"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return state.todoReducer;
};
export default connect(mapStateToProps, { hideToDo })(ToDoModal);
