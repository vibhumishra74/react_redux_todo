import React from "react";
import { selectdata } from "../../redux/appSlice";
import { useSelector } from "react-redux";

let Singletodo = (props) => {
  let alldata = useSelector(selectdata);
  let singletodo = props.location.state;
  if (!singletodo) {
    const id = props.match.params.id;
    singletodo = alldata.find((items) => items.id == id);
  }
  console.log("singletodo", props, "single items", singletodo);
  return <div>{console.log("singletodo", singletodo)}</div>;
};

export default Singletodo;
