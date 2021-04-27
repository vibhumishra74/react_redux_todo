import React,{useState} from "react";
import { ADD_Single_TODO, selectdata,Single } from "../../redux/appSlice";
import { useSelector,useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

let Singletodo = (props) => {
  let alldata = useSelector(selectdata);
  let singles = useSelector(Single);
  const [tasks, setTasks] = useState("");
  console.log('task console',tasks)
  // let singleto = useSelector(ADD_Single_TODO);
  let  dispatch = useDispatch()
  let singletodo = props.location.state;
  function handleFormSubmit(e) {
    e.preventDefault();
    
    e.target.userInput.value = "";
    console.log(tasks);
  }
  if (!singletodo) {
    const id = props.match.params.id;
    singletodo = alldata.find((items) => items.id == id);
  }
  let single = ()=>{
    dispatch(ADD_Single_TODO({ task: tasks, id: props.match.params.id }))
    setTasks('')
  }
  console.log("singletodo", props, "single items", singletodo);
  return <div>{console.log("singletodo", singletodo)} 
  <form onSubmit={handleFormSubmit}>
  <input name="userInput" value={tasks} onChange={e=> setTasks(e.target.value)} /> 
  <button onClick={single}>Add single todo</button>
  </form>
  {/* <p>{singletodo.task}</p>   */}
  {/* <button>Edit</button>
  <button>delet</button> */}
  {singles.map((todo,i)=>{
    return(
    todo.id===props.match.params.id ?

    (

      <div key={i}> {todo.task} </div>
    ):('')
    
    )
  })}
  <TodoItem task={singletodo} key={singletodo.id}/>
  </div>;
};

export default Singletodo;
