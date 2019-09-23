import { User } from 'models';
import { CURRENT_USER_ACTIONS } from 'redux/currentUser/currentUser.actions';
import APP_STATE_ACTIONS from './appState.actions.list';

class AppState {
  static loginUser = token => dispatch => {
    dispatch({ type: APP_STATE_ACTIONS.SET_AUTHORIZED, payload: { token } });
  };

  static logoutUser = () => dispatch =>
    dispatch({
      type: APP_STATE_ACTIONS.LOGOUT_USER
    });

  static setCurrentUser = currentUser => dispatch => {
    dispatch({
      type: CURRENT_USER_ACTIONS.CURRENT_USER_SET,
      payload: currentUser
    });
  };

  static refreshingOn = () => dispatch => {
    dispatch({ type: APP_STATE_ACTIONS.REFRESHING_ON });
  };

  static refreshingOff = () => dispatch => {
    dispatch({ type: APP_STATE_ACTIONS.REFRESHING_OFF });
  };
}

export { AppState };
