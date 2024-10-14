import React, { useState } from "react";

function ToDoItem({ todo, setTodos, todos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(todo.text);

  const handleComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, text: currentText } : item
      )
    );
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
        />
      ) : (
        <span onClick={handleComplete}>{todo.text}</span>
      )}
      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
