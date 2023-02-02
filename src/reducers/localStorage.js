const nameStorage = 'SMARTUP_EXPERIENCE';

export const saveState = (state) => {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem(nameStorage, stringifiedState);
};
export const loadState = () => {
  const json = localStorage.getItem(nameStorage) || '{}';
  const state = JSON.parse(json);
  if (state) {
    return state;
  } else {
    return undefined; // To use the defaults in the reducers
  }
};
