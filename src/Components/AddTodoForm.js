import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Actions/TodoActions";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <form style={{ marginBottom: "16px" }} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        style={{
          marginRight: "8px",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
