import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from '../thunks';
addTodoRequest;

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='Type your new Todo'
        value={inputValue}
        // El value va ser lo que sea que ingresemos en el text input
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          onCreatePressed(inputValue);
          setInputValue('');
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatePressed: (text) => dispatch(addTodoRequest(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
