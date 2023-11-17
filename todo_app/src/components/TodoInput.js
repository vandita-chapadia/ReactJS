import { useState } from "react"

const TodoInput =(props) =>{
    const [enteredTodo,setTodo] = useState("");
    const [validInput,setValidInput] = useState(true)
    const addTodoHandler=(event)=>{
      setTodo(event.target.value);
    }
    const submitTodo=()=>{
        setValidInput(true)
        if(enteredTodo.trim().length>0 && enteredTodo.length>10){
        props.addTodo({
            id:Math.floor(Math.random() * 100) + 1,
            todo:enteredTodo
        })
        setTodo("")
    }
    else{
        setValidInput(false)
    }
    }
    return (
        <div>
            <input  type="text" placeholder="Enter Todo" onChange={addTodoHandler} value={enteredTodo}/>
            <button onClick={submitTodo}>Add Todo</button>
            <div>{enteredTodo}</div>
      
            { !validInput &&  <p style={{color:"red"}}> Enter Input proper input</p>}
           
        </div>
    )
}
export default TodoInput;