import React, { useState } from 'react';

const NewTodoForm = () => {
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
      <button>Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
