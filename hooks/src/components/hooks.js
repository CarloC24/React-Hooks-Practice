import React, { useState } from 'react';
import Form from './forms';

const Hooks = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('carlo');

  return (
    <div>
      <h1>Welcome to Todos by {name}</h1>
      <input onChange={e => setName(e.target.value)} />
      <Form onSubmit />
      {todos.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Hooks;
