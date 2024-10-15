import React, { useState } from "react";
import axios from "axios";
import "./AddToDo.css";
const AddTodo = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addTodo = async () => {
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/todo", { title, done: false });
      fetchTodos();
      setTitle("");
    } catch (err) {
      setError("Failed to add todo. Please try again.");
      console.error("Error adding todo:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addtodo">
      <input
        className="todoTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todoBtn" onClick={addTodo} disabled={loading}>
        Add Todo
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default AddTodo;
