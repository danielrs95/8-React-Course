import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from '../actions/todoActions';
import { loadTodos } from '../thunks';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos..</div>;

  const content = (
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

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
