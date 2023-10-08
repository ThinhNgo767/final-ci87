import "./style.css";
import TodoList from "../TodoList";


const Todo = ({ todos, completed, filter, setFilter, handleDeleteTask}) => {

  return (
    <>
    <ul className="filter_todo">
      <li onClick={()=>setFilter("All")} className={filter === "All" ? "active":""}>All</li>
      <li onClick={()=>setFilter("Active")} className={filter === "Active" ? "active":""} >Active</li>
      <li onClick={()=>setFilter("Completed")} className={filter === "Completed" ? "active":""}>Completed</li>
    </ul>
      
      <div className="todo_list">
        {todos().map((todo) => (
          <TodoList key={todo.id} todos={todo} completed={completed} handleDeleteTask={handleDeleteTask}/>
        ))}
      </div>
    </>
  );
};
export default Todo;
