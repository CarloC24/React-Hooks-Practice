import React, { useState } from 'react';

const inputValue = initialState => {
  const [value, setValue] = useState(initialState);
  return {
    value: value,
    onChange: e => setValue(e.target.value)
  };
};

export default props => {
  const name = inputValue('');
  const email = inputValue('');
  const age = inputValue('');
  return (
    <div>
      <h1>Add Todos?</h1>
      <form onSubmit={() => props.addTodo}>
        <input {...name} />
        <input {...email} />
        <input {...age} />
      </form>
    </div>
  );
};
