const TodoItem =(props)=>{
   return(
    <div>
       <h2> { props.id}. {props.todo}</h2>
    </div>
   )
}
export default TodoItem;