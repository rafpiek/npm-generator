/* eslint-disable no-console */
import i18next from 'i18next';

import locales from './locales';

class Locales {
  /**
   * @public
   * @returns {void}
   */
  static init() {
    i18next.init(
      {
        lng: 'pl',
        debug: false,
        resources: locales
      },
      err => {
        if (err) {
          console.error(err);
        }
      }
    );
  }

  /**
   * @public
   * @param {string} key
   * @returns {boolean}
   */
  static has(key) {
    return i18next.exists(key);
  }
}

export default Locales;
