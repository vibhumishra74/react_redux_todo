import React, { useState } from "react";
import { useDispatch } from "react-redux";

import cuid from "cuid";
import { ADD_TODO } from "../../redux/appSlice";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(ADD_TODO({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="userInput"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
