import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
