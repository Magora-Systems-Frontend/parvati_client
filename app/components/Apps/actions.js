import { APPS_LIST_LOAD, APPS_LIST, APPS_ITEM_SELECT } from './constants';

export function getList() {
  return async dispatch => {
    await dispatch({
      type: APPS_LIST_LOAD,
      payload: {
        list: APPS_LIST,
        selected: [],
      },
    });
  };
}

export function selectApp(appId) {
  return (dispatch, getState) => {
    const state = getState();
    const selectedApps = state.apps.payload.selected;
    const matchIndex = selectedApps.indexOf(appId);

    if (matchIndex !== -1) {
      return dispatch({
        type: APPS_ITEM_SELECT,
        payload: {
          selected: (selected => {
            selected.splice(matchIndex, 1);
            return selected;
          })(selectedApps),
        },
      });
    }
    return dispatch({
      type: APPS_ITEM_SELECT,
      payload: {
        selected: (selected => {
          selected.push(appId);
          return selected;
        })(selectedApps),
      },
    });
  };
}
