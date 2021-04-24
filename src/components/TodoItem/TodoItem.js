import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { DELETE_TODO, selectdata, UPDATE_TODO } from "../../redux/appSlice";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
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
        <button type="submt">save todo</button>
      </form>
    );
  };
  const redirect = () => {
    // let todo = selectdata.map((item, index) => {
    //   return (
    //     <Link
    //       key={item.id}
    //       to={{
    //         pathname: "/" + item.id,
    //         state: item,
    //       }}
    //     ></Link>
    //   );
    // });
    setIsUpdate(true);
    // return todo;
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button style={{ margin: "5px" }} onClick={redirect}>
          Edit
        </button>
        <button onClick={() => dispatch(DELETE_TODO(task.id))}>Delete</button>
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
