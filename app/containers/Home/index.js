import React from 'react';
import Apps from '../../components/Apps';

/* eslint-disable react/prefer-stateless-function */
export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="page-home">
        <h1>Home Page</h1>
        <Apps type="selected" />
      </div>
    );
  }
}
