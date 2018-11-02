import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import cns from 'classnames';
import * as notifyActions from './actions';
import { notifyTypes } from './constants';
import { notify as notifySelector } from './selectors';
import './notify.styl';

@connect(
  createStructuredSelector({ notifies: notifySelector }),
  {
    destroyNotify: notifyActions.destroyNotify,
  },
)
class Index extends Component {
  static propTypes = {
    notifies: PropTypes.array.isRequired,
    destroyNotify: PropTypes.func.isRequired,
  };

  render() {
    const { notifies, destroyNotify } = this.props;

    return (
      <div className="notify">
        {notifies.map(item => (
          <div
            className={cns('notify__item box', {
              'notify__item--success': item.type === notifyTypes.SUCCESS,
              'notify__item--failure': item.type === notifyTypes.FAILURE,
            })}
            key={item.timeoutId}
          >
            <button
              type="button"
              className="notify__close"
              onClick={() => destroyNotify(item.timeoutId)}
            />
            <div className="notify-header">{item.title}</div>
            <div className="notify__body">{item.body}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
