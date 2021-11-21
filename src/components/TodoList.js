import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {
  loadTodos,
  markTodoAsCompletedRequest,
  removeTodoRequest,
} from '../thunks';
import { getTodos, getTodosLoading } from './selectors';

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
          key={todo.id}
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
    isLoading: getTodosLoading(state),
    todos: getTodos(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
