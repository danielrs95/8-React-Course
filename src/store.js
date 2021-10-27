import { createStore, combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducers';

const reducers = { todoReducer };

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
