/**
 *
 * Root/index.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'containers/App';
import Notify from 'containers/Notify';
import { CLIENT_PAGES } from 'app/constants';
import { Wrapper } from './index.styled';

/* eslint-disable react/prefer-stateless-function */
export default class Root extends React.Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path={CLIENT_PAGES.HOME} component={App} />
        </Switch>
        <Notify />
      </Wrapper>
    );
  }
}
