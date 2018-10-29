const initialState = {
  name: 'Carlo',
  age: 21,
  email: 'Carlo.clamucha@gmail.com'
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
