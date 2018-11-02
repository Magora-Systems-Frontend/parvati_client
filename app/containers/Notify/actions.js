import { NOTIFY_ADD, NOTIFY_DESTROY, notifyTypes } from './constants';

export function destroyNotify(timeoutId) {
  clearTimeout(timeoutId);

  return {
    type: NOTIFY_DESTROY,
    data: { timeoutId },
  };
}

export function addNotifySuccess({ title, body, time = 30000 }) {
  return addNotify({
    title,
    body,
    type: notifyTypes.SUCCESS,
    time,
  });
}

export function addNotifyError({ title, body, time = 30000 }) {
  return addNotify({
    title,
    body,
    type: notifyTypes.FAILURE,
    time,
  });
}

export function addNotify({ title, body, type, time = 30000 }) {
  return dispatch => {
    const timeoutId = setTimeout(() => {
      dispatch({
        type: NOTIFY_DESTROY,
        data: { timeoutId },
      });
    }, time);

    return dispatch({
      type: NOTIFY_ADD,
      data: {
        title,
        body,
        type,
        timeoutId,
      },
    });
  };
}
