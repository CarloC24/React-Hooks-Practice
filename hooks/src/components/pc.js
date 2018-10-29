import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const Practice = props => {
  console.log(props);
  return (
    <div>
      <h1>React Router with redux</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1> <h1>{props.email}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    email: state.email
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  null
)(Practice);
