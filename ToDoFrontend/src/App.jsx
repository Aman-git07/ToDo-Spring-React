import React, { useEffect, useState } from "react";
import TodoList from "../components/ToDoList";
import AddTodo from "../components/AddTodo";
import axios from "axios";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todo");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Todo App</h1>
      <AddTodo className="addtodo" fetchTodos={fetchTodos} />
      {/* Pass todos to TodoList */}
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
