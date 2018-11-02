import React from 'react';
import Apps from '../../../components/Apps';

/* eslint-disable react/prefer-stateless-function */
export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <Apps />
        </section>
      </aside>
    );
  }
}
