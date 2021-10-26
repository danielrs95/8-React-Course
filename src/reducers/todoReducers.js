import { CREATE_TODO, REMOVE_TODO } from '../actions/todoActions';

export const todoReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };

      // Agregamos al estado el newTodo
      // concat no muta el estado, devuelve otro array nuevo
      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { text } = payload;

      // Usamos el texto como si fuera el ID proque no vamos a permitir todos repetidos
      // No es lo ideal, pero es algo temporal
      return state.filter((todo) => todo.text !== text);
    }

    default:
      return state;
  }
};
