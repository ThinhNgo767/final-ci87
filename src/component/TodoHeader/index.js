import "./style.css";

import { useState} from "react";

const TodoHeader = ({ todos, setTodos ,setLocalStore}) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: todos.length + 1,
      task: newTask,
      isCompleted: false,
    };

    setTodos((todos) => {
      const newTodos = [...todos, task];
     setLocalStore(newTodos)
      return newTodos;
    });
    setNewTask("");
  };

  return (
    <div className="todo_header">
      <input
        type="text"
        placeholder="Enter new task ..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Add task
      </button>
    </div>
  );
};
export default TodoHeader;
