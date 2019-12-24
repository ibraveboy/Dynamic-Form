import "./ToDo.css";
import React, { useEffect } from "react";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
    setToDoList,
    updateToDo,
    deleteToDo,
    addToDo,
    viewToDo,
    toggleIsLoading
} from "../../../../Redux/Actions";
import shortid from "shortid";

function ToDo(props) {
  // table icons
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => (
            <DeleteOutline {...props} ref={ref} />
        )),
        DetailPanel: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => (
            <FirstPage {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
            <ChevronLeft {...props} ref={ref} />
        )),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
            <ArrowDownward {...props} ref={ref} />
        )),
        ThirdStateCheck: forwardRef((props, ref) => (
            <Remove {...props} ref={ref} />
        )),
        ViewColumn: forwardRef((props, ref) => (
            <ViewColumn {...props} ref={ref} />
        ))
  };
  
// state using hooks
    const [state, setState] = React.useState({
        columns: [],
        data: []
    });
    const { setToDoList, todoList } = props;
//
  //
  //component did mount and did update hooks
  //
    useEffect(() => {
        if (!todoList.length) {
            setToDoList();
        } else {
            setState({
              data: todoList,
              columns:props.columns
            });
        }
    }, [todoList, setToDoList,props.columns]);
    return (
        <div className="todo-table-wrapper">
            <MaterialTable
                icons={tableIcons}
                title="TODOs"
                isLoading={props.isLoading}
                columns={state.columns}
                data={state.data}
                onRowClick={(event, rowData) => props.viewToDo(rowData)}
                editable={{
                    // onRowAdd: newData =>
                    //     new Promise((resolve, reject) => {
                    //         console.log(newData);
                            
                    //         if (newData.title === undefined || newData.description === undefined || newData.date === undefined || newData.complete === undefined)
                    //             reject()
                    //         else
                    //         setTimeout(() => {
                    //             resolve();
                    //             newData._id = shortid.generate()
                    //             setState(prevState => {
                    //                 const data = [...prevState.data];
                    //                 data.push(newData);
                    //                 return { ...prevState, data };
                    //             });
                    //             props.addToDo(newData);
                    //         }, 600);
                    //     }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                    props.updateToDo(newData, oldData._id);
                                }
                            }, 600);
                        }),
                    // onRowDelete: oldData =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             setState(prevState => {
                    //                 const data = [...prevState.data];
                    //                 data.splice(data.indexOf(oldData), 1);
                    //                 return { ...prevState, data };
                    //             });
                    //             props.deleteToDo(oldData._id);
                    //         }, 600);
                    //     })
                }}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return state.todoReducer;
};
export default connect(mapStateToProps, {
    setToDoList,
    updateToDo,
    deleteToDo,
    addToDo,
    viewToDo,
    toggleIsLoading
})(ToDo);

