import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cns from 'classnames';
import * as appsActions from './actions';
import { APP_ALL_ITEM } from './constants';
import './index.styl';

@connect(
  ({ apps }) => ({
    apps,
  }),
  {
    getList: appsActions.getList,
    selectApp: appsActions.selectApp,
  },
)
export default class LoginForm extends React.PureComponent {
  static propTypes = {
    type: PropTypes.any,
    apps: PropTypes.object.isRequired,
    getList: PropTypes.func.isRequired,
    selectApp: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showAppsList: true,
    };
  }

  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  onClickAppAll() {
    const { showAppsList } = this.state;
    this.setState({
      showAppsList: !showAppsList,
    });
  }

  onClickApp(props = {}) {
    const { item } = props;
    const { selectApp } = this.props;
    selectApp(item.id);
  }

  getStyledApp(item, index) {
    const { apps } = this.props;
    const list = apps.payload.list || [];
    const { isSystem } = item;
    const selected = apps.payload.selected || [];
    const active = selected.indexOf(item.id) !== -1;

    // Get System App View
    if (isSystem) {
      return (
        <li
          key={index}
          className="apps-item apps-item-system"
          onClick={() => this.onClickAppAll()}
        >
          <div className="apps-item-wrapper">
            <span className="apps-item-icon-wrapper">
              <img
                alt={item.title}
                className="apps-item-icon"
                src={item.icon}
              />
            </span>
            <span className="apps-item-title">{item.title}</span>
            <span className="apps-item-corp">{`${list.length} Clients`}</span>
          </div>
        </li>
      );
    }

    return (
      <div
        key={index}
        className={cns('apps-item', {
          active,
        })}
        onClick={() => this.onClickApp({ item, index })}
      >
        <div className="apps-item-wrapper">
          <span className="apps-item-icon-wrapper">
            <img alt={item.title} className="apps-item-icon" src={item.icon} />
          </span>
          <span className="apps-item-title">{item.title}</span>
          <span className="apps-item-corp">{item.corpName}</span>
        </div>
      </div>
    );
  }

  getSelectedItems() {
    const { apps } = this.props;
    const list = apps.payload.list || [];
    const selected = apps.payload.selected || [];
    if (selected.length === 0) return null;
    const selectedList = list.filter(item => selected.indexOf(item.id) !== -1);
    return this.getItems(selectedList, { isShownAlways: true });
  }

  getItems(list = [], options = {}) {
    let { showAppsList } = this.state;

    if (typeof options.isShownAlways === 'boolean') {
      showAppsList = options.isShownAlways;
    }

    return (
      <div
        className={cns('apps-list-wrapper clearfix', {
          'apps-list-wrapper-open': showAppsList,
          'apps-list-wrapper-collapse': !showAppsList,
        })}
      >
        <ul className="apps-list clearfix">
          {list.map(this.getStyledApp.bind(this))}
        </ul>
      </div>
    );
  }

  render() {
    const { apps, type } = this.props;
    const { showAppsList } = this.state;
    const list = apps.payload.list || [];
    const selected = apps.payload.selected || [];
    if (list.length === 0) return null;
    if (type === 'selected') return this.getSelectedItems();
    return (
      <div className="apps-wrapper">
        {selected.length > 0 && (
          <div className="apps-selected">{this.getSelectedItems()}</div>
        )}
        <div className="apps-all">
          {this.getStyledApp(APP_ALL_ITEM)}
          {showAppsList && <span className="separator-line">&nbsp;</span>}
        </div>
        {this.getItems(list)}
      </div>
    );
  }
}
