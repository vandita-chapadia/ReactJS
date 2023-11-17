import TodoItem from "./TodoItem";

const Todos =({onRemove,item,onEdit})=>{

 
    return(
     <div>
       {
        item.map((item,i)=>{
           return (
            <div key={i}>
           <TodoItem id={item.id}  todo={item.todo}></TodoItem> 
           <button onClick={()=>onRemove(item.id)}>Delete</button>
           <button onClick={()=>onEdit(item.id)}>Edit</button>
           </div>
           )
        })
       }
     </div>
    )
 }
 export default Todos;