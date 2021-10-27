import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo } from '../actions/todoActions';

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemovePressed: (text) => dispatch(removeTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
