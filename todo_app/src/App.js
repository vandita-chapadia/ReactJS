import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
const Todo = [
  {
    id: 1,
    todo: "node testing",
  },
  {
    id: 2,
    todo: "docker",
  },
  {
    id: 3,
    todo: "bug fixing",
  },
];

function App() {
  const [listTodo, setTodolist] = useState(Todo);
  const [updateTodo,setUpdateTodo]=useState([])

  const addTodo = (todo) => {
    setTodolist([...listTodo, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id);
    const list = [...listTodo];
    const newTodo = list.filter((el) => el.id !== id);
    console.log(newTodo);
    setTodolist(newTodo);
  };

  const editTodo =(id)=>{
    console.log("edit",id)
    const list = [...listTodo];
    const utodo = list.filter((el) => el.id === id);
     console.log(utodo)
     console.log("ssd",[...updateTodo,...utodo])
     setUpdateTodo([...updateTodo,...utodo])

  }

  return (
    <div>
      <Header />
      <p>{listTodo[0].todo}</p>
      {/* <p>{updateTodo[0].todo}</p> */}
      <TodoInput addTodo={addTodo} editValue={updateTodo} />
      <Todos item={listTodo} onRemove={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

export default App;
