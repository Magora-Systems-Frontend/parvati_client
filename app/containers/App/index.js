import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import autoBind from 'react-autobind';
import cns from 'classnames';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from '../Home';
import { Main, Wrapper, ContentWrapper } from './index.styled';

export default class App extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    autoBind(this);
  }

  handleToggleSidebar() {
    const { sidebarOpen } = this.state;
    this.setState({
      sidebarOpen: !sidebarOpen,
    });
  }

  render() {
    const { sidebarOpen } = this.state;
    return (
      <Main
        className={cns('skin-green sidebar-mini', {
          'sidebar-open': sidebarOpen,
          'sidebar-collapse': !sidebarOpen,
        })}
      >
        <Wrapper>
          <Header toggleSidebar={this.handleToggleSidebar} />
          <Sidebar />
          <ContentWrapper>
            <section className="content">
              <Switch>
                <Route component={Home} />
              </Switch>
            </section>
          </ContentWrapper>
        </Wrapper>
      </Main>
    );
  }
}
