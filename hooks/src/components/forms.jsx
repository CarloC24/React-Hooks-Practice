import React, { useState } from 'react';

const inputValue = initialState => {
  const [value, setValue] = useState(initialState);
  return {
    value: value,
    onChange: e => setValue(e.target.value)
  };
};

export default props => {
  const [inputField, setField] = useState({
    name: '',
    email: '',
    age: null
  });

  const [smurfs, setSmurfs] = useState([]);

  const handleChange = e => {
    console.log(e.target.name);
    setField({ ...inputField, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Add Todos?</h1>
      <form onSubmit={() => props.addTodo}>
        <input
          type="text"
          name="name"
          onChange={e => handleChange(e)}
          value={inputField.name}
        />
        <input
          type="text"
          name="age"
          onChange={e => handleChange(e)}
          value={inputField.age}
        />
        <input
          type="text"
          name="email"
          onChange={e => handleChange(e)}
          value={inputField.email}
        />
      </form>
    </div>
  );
};
