import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_DRAWER_STATE,
} from '../actions/app.js';

const INITIAL_STATE = {
  page: '',
  offline: false,
  drawerOpened: false,
  snackbarOpened: false,
};

const cases = {
  [UPDATE_PAGE]: (state, action) => {
    return {
      ...state,
      page: action.page,
    };
  },
  [UPDATE_OFFLINE]: (state, action) => {
    return {
      ...state,
      offline: action.offline,
    };
  },
  [UPDATE_DRAWER_STATE]: (state, action) => {
    return {
      ...state,
      drawerOpened: action.opened,
    };
  },
  [OPEN_SNACKBAR]: (state) => {
    return {
      ...state,
      snackbarOpened: true,
    };
  },
  [CLOSE_SNACKBAR]: (state) => {
    return {
      ...state,
      snackbarOpened: false,
    };
  },
  default: (state) => state,
};


const app = (state = INITIAL_STATE, action) => {
  return (cases[action.type] || cases.default)(state, action);
};

export default app;
