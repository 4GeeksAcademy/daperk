import React, { useState } from "react";

function TodoItem({ label, isDone, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      <span className="todo-text">{label}</span>
      <button className="btn btn-danger" onClick={onDelete}>Delete</button>
    </div>
  );
}

function Home() {
  const [todos, setTodos] = useState([
    { label: "Go to the supermarket.", isDone: false },
    { label: "Buy cereal.", isDone: false },
    { label: "Make oil change to the car before 5/30.", isDone: false },
    { label: "Go home and clean the house before 11:00 PM", isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { label: newTodo, isDone: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <input
        className="form-control"
        type="text"
        placeholder="What do you want to get done today?"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo.label}
          isDone={todo.isDone}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default Home;
