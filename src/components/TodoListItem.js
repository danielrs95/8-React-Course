import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <div>
        {todo.isCompleted ? null : (
          <button
            onClick={() => {
              onCompletedPressed(todo.text);
            }}
          >
            Mark as completed
          </button>
        )}

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
