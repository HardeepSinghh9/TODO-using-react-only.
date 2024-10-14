import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoInput,
        completed: false,
      },
    ]);
    setTodoInput("");
  };

  return (
    <div className="app-container">
      <Header />
      <div className="todo-input">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
