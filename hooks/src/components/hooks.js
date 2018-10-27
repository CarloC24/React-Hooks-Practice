import React, { useState } from 'react';

const Hooks = () => {
  const [name, setName] = useState('Carlo');

  const inputChange = event => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" onChange={e => inputChange(e)} />
    </div>
  );
};

export default Hooks;
