import { reducerPresetData } from 'helpers/handlers';

const initialState = {
  type: null,
  payload: {
    list: [],
    selected: [],
  },
};

/**
 * Merge route into the global application state
 */
export default function authReducer(state = initialState, action) {
  const checkedState = reducerPresetData({
    action,
    state,
    eventPrefix: 'APPS',
  });

  switch (action.type) {
    default:
      return checkedState;
  }
}
