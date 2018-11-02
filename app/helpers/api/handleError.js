import * as notifyActions from 'containers/Notify/actions';
import { logout } from '../../components/Apps/actions';

export default function handleError(e, dispatch) {
  const {
    data: { message, errors },
    status,
  } = e;
  if (status === 401) {
    return dispatch(logout());
  }
  if (errors) {
    errors.forEach((error) => {
      dispatch(notifyActions.addNotifyError({ title: error.field || 'error', body: error.message }));
    });
  } else {
    dispatch(notifyActions.addNotifyError({ title: 'error', body: message }));
  }
  return message;
}
