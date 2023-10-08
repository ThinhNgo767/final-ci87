import "./style.css";

import { AiOutlineDelete } from "react-icons/ai";

const TodoList = ({ todos, completed ,handleDeleteTask}) => {
  const { id, task, isCompleted } = todos;
  
  const done = isCompleted ? "task_done" : "";
  return (
    <div className="todo">
     
        <input
          type="checkbox"
          title="check todo"
          className="check_todo"
          checked={isCompleted}
          onChange={() => completed(id)}
        />
        <span className={done}>{task}</span>
      <button type="button" className="delete_task" onClick={()=>handleDeleteTask(id)}><AiOutlineDelete className="icon_delete"/></button>
    </div>
  );
};

export default TodoList;