import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from '../thunks';
import styled from 'styled-components';
addTodoRequest;

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <FormContainer>
      <NewTodoInput
        type='text'
        placeholder='Type your new Todo'
        value={inputValue}
        // El value va ser lo que sea que ingresemos en el text input
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewTodoButton
        onClick={() => {
          onCreatePressed(inputValue);
          setInputValue('');
        }}
      >
        Create Todo
      </NewTodoButton>
    </FormContainer>
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
