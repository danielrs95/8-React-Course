import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from '../actions/todoActions';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
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
    onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
