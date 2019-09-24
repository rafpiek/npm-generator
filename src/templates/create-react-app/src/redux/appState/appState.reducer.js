import APP_STATE_ACTIONS from './appState.actions.list';

const defaultState = {
  isAuthorized: false,
  token: null,
  isRefreshing: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_STATE_ACTIONS.SET_AUTHORIZED:
      return { ...state, isAuthorized: true, token: action.payload.token };
    case APP_STATE_ACTIONS.LOGOUT_USER:
      return defaultState;
    case APP_STATE_ACTIONS.REFRESHING_ON:
      return { ...state, isRefreshing: true };
    case APP_STATE_ACTIONS.REFRESHING_OFF:
      return { ...state, isRefreshing: false };
    default:
      return state;
  }
};
