import "./style.css";
import { TODOS } from "../../data/todos";
import TodoHeader from "../../component/TodoHeader";
import Todo from "../../component/Todo";
import TodoFooter from "../../component/TodoFooter";

import { useState, useEffect } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);
  const [filter, setFilter] = useState("All");


  useEffect(() => {
    const handleFetchTodos = () => {
      const localTodos = JSON.parse(localStorage.getItem("TODOS"));
      if (localTodos) {
        setTodos(localTodos);
      } else {
        setTodos(TODOS);
      }
    };
    handleFetchTodos();
  }, []);

  const setLocalStore = (data) => {
    localStorage.setItem("TODOS", JSON.stringify(data));
  };

  const filterTodos = () => {
    if (filter === "Active") {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted);
    } else {
      return todos.filter((todo) => todo.task);
    }
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(updatedTodos);
    setLocalStore(updatedTodos);
  };

  const handleDeleteAllTask = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa tất cả không?");
    if(confirmDelete){
      setTodos([]);
    setLocalStore([]);
    }
    
  };

  return (
    <div className="todo_page">
      <TodoHeader
        todos={todos}
        setTodos={setTodos}
        setLocalStore={setLocalStore}
      />
      <Todo
        todos={filterTodos}
        completed={handleCheckboxChange}
        handleDeleteTask={handleDeleteTask}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoFooter handleDeleteAllTask={handleDeleteAllTask}/>
    </div>
  );
};

export default TodoPage;
