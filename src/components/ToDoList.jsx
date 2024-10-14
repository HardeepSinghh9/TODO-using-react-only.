import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}

export default ToDoList;
