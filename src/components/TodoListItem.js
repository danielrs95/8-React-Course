import React from 'react';

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <div>
        <button>Mark as completed</button>
        <button
          onClick={() => {
            onRemovePressed(todo.text);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
