import { NOTIFY_ADD, NOTIFY_DESTROY } from './constants';

const initialState = {
  type: null,
  payload: {
    list: [],
  },
};

export default function notify(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFY_ADD:
      state.payload.list.push(action.data);
      return state;
    case NOTIFY_DESTROY:
      return state.payload.list.filter(
        item => item.timeoutId !== action.data.timeoutId,
      );
    default:
      return state;
  }
}
