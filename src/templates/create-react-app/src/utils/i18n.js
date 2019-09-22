import i18next from 'i18next';
import locales from './locales';

class Locales {
  static init() {
    i18next.init(
      {
        lng: 'en',
        debug: false,
        resources: locales
      },
      error => {
        if (error) {
          console.error(error);
        }
      }
    );
  }

  static has(key) {
    return i18next.exists(key);
  }
}

const t = (key, options) => {
  return i18next.t(key, options);
};

export { Locales, t };
