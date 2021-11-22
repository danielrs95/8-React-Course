import { createSelector } from 'reselect';

export const getTodos = (state) => {
  return state.todos.data;
};

export const getTodosLoading = (state) => {
  return state.todos.isLoading;
};

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

// Otra manera sería sacar la logica del filtro a otra funcion

// const getIncompleteTodosFunction = (todos) => {
//   return todos.filter((todo) => !todo.isCompleted);
// };

// export const getIncompleteTodos = createSelector(
//   getTodos,
//   getIncompleteTodosFunction
// );

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
