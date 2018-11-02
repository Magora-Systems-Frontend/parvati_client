export const getPureObject = (object, byDefault) => {
  if (!object) return byDefault;
  return Object.assign({}, object);
};

export function sget(obj = {}, sourcePath, byDefault) {
  let newObj;
  for (
    let i = 0, path = sourcePath.split('.'), len = path.length;
    i < len;
    i += 1
  ) {
    if (obj[path[i]]) {
      newObj = obj[path[i]];
    } else {
      return byDefault;
    }
  }
  return newObj || obj;
}

export function reducerPresetData({ state, action, eventPrefix }) {
  if (!eventPrefix) return state;
  const pattern = new RegExp(`^${eventPrefix}`);
  if (!pattern.test(action.type)) return state;
  if (
    !action.payload ||
    action.payload.error ||
    Object.keys(action.payload).length === 0
  ) {
    return state;
  }

  const newState = Object.assign({}, state, {
    type: action.type,
  });
  if (!newState.payload) newState.payload = {};
  Object.keys(action.payload).forEach(key => {
    newState.payload[key] = action.payload[key];
  });
  return newState;
}
