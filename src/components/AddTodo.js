import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    if (newTodo) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="add-todo">
      <div className="add-todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter new task"
        />
        <button
          className="add-todo-button"
          onClick={handleAddClick}
          disabled={!newTodo} 
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
