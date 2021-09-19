import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <div>
        <button>Mark as completed</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
