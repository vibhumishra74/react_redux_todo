import { Button } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { DELETE_TODO, selectdata, UPDATE_TODO } from "../../redux/appSlice";


const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector(selectdata)
  // const history = useHistory();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(UPDATE_TODO({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);

    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type="text" defaultValue={task.task} />
        <Button variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  startIcon={<EditIcon />} type="submt">save todo</Button>
      </form>
    );
  };
  const redirect = () => {
    let todo = select.map((item, index) => {
      return (
        <Link
          key={item.id}
          to={{
            pathname: "/" + item.id,
            state: item,
          }}
        ></Link>
      );
    });
    setIsUpdate(true);
    return todo;
  };
  const renderItem = () => {
    return (
      <>
       <Link to={'/Singletodo/'+task.id} style={{textDecoration:"none"}}>
       {task.task}
         </Link>
        
        <Button  variant="contained" style={{padding:"1px", margin: "10px"}} color="primary"  size="small"  startIcon={<EditIcon />}  onClick={redirect}>
         {/* <Link to={'/Singletodo/'+task.id}> */}
          Edit
         {/* </Link> */}
        </Button>
        <Button  variant="contained"
        size="small"
        color="secondary"
        startIcon={<DeleteIcon />}
        style={{padding:"1px"}}  onClick={() => dispatch(DELETE_TODO(task.id))}>Delete</Button>
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

export default TodoItem;
