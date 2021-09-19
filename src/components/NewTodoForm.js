import React, { useState } from 'react';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        // El value va ser lo que sea que ingresemos en el text input
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
