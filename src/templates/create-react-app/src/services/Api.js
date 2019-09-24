import axios from 'axios';
import { store } from 'redux/store';

const headers = () => ({
  Authorization: `Bearer ${store.getState().appState.token}`
});

const API_URL = process.env.REACT_APP_API;

export default class API {
  static get(url = '', params = {}) {
    return axios.get(requestUrl(url), {
      headers: headers()
    });
  }

  static post(url, params) {
    return axios.post(requestUrl(url), params, {
      headers: headers()
    });
  }

  static patch(url, params) {}

  static delete(url) {}
}

const requestUrl = url => `${API_URL}${url}`;
