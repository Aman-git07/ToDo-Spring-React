import React from "react";
import TodoItem from "./ToDoItem";
import axios from "axios";
import "./ToDoList.css";
const TodoList = ({ todos, fetchTodos }) => {
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todo/${id}`);
      fetchTodos();
    } catch (error) {
      return "Error deleting Todo: " + error;
    }
  };

  const toggleComplete = async (id, doneStatus) => {
    const todo = todos.find((todo) => todo.id === id);
    await axios.put("http://localhost:8080/todo", {
      ...todo,
      done: doneStatus,
    });
    fetchTodos();
  };

  return (
    <div className="listDiv">
      <h2 className="listHeading">Todo List</h2>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <p>No todos available</p> // Handle empty todo list
      )}
    </div>
  );
};

export default TodoList;
