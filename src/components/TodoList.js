import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
