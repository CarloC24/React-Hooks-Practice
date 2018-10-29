import React, { useState } from 'react';
import Form from './forms';
import { Route } from 'react-router';
import Practice from '../components/pc';

const Hooks = () => {
  const [name, setName] = useState('carlo');

  return (
    <div>
      <h1>Router with {name}</h1>
      <Route path="/" render={props => <Form {...props} />} />
      <Route path="/" render={props => <Practice {...props} />} />
    </div>
  );
};

export default Hooks;
