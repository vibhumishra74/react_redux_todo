import React, { useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { selectdata, UPDATE_single_TODO, DELETE_single_TODO } from "../../redux/appSlice";

const Singletodoitems = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector(selectdata)
  // const history = useHistory();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    // dispatch(UPDATE_TODO({ message: textRef.current.value, id: task.newid }));
    dispatch(UPDATE_single_TODO({ message: textRef.current.value, id: task.id,newid:task.newid }));
    setIsUpdate(false);

    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type="text" defaultValue={task.task} />
        <Button variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  startIcon={<AddIcon />} type="submt">save todo</Button>
      </form>
    );
  };
  const redirect = () => {
    
    setIsUpdate(true);
    // return todo;
  };
  const renderItem = () => {
    return (
      <>
       <Link to={'/Singletodo/'+task.id} style={{textDecoration:"none"}}>
       {task.task}
         </Link>
        
        <Button variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  startIcon={<EditIcon />}  onClick={redirect}>
         {/* <Link to={'/Singletodo/'+task.id}> */}
          Edit
         {/* </Link> */}
        </Button>
        {/* <Button  size="large" variant="contained" color="secondary" onClick={() => dispatch(DELETE_single_TODO(task.newid))}>Delete</Button> */}
        <Button
        variant="contained"
        size="small"
        color="secondary"
        startIcon={<DeleteIcon />}
        style={{padding:"1px"}}
        onClick={() => dispatch(DELETE_single_TODO(task.newid))}
      >
        Delete
      </Button>
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()} </div>
    </>
  );
};

export default Singletodoitems;
