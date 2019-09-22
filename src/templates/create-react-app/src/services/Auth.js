import { API } from 'services';
import { AppState } from 'redux/actions';
import { User } from 'models';

export default class Auth {
  static login(email, password) {
    API.post('/login', { email, password, grant_type: 'password' }).then(
      res => {
        if (res.data.access_token) {
          window.store.dispatch(AppState.loginUser(res.data.access_token));
        } else {
          window.store.dispatch(AppState.logoutUser());
        }
      }
    );
  }

  static logout() {
    API.post('/logout').then(res => {
      if (res.status === 200) {
        window.store.dispatch(AppState.logoutUser());
      }
    });
  }

  static authorize() {
    User.getCurrentUser()
      .then(res => {
        if (res.data) {
          window.store.dispatch(AppState.setCurrentUser(res.data));
        }
      })
      .catch(error => {
        console.log('err', error);
        // window.store.dispatch(AppState.logoutUser())
      });
  }
}
