module.exports = {
  npmProject: {
    name: 'npm-project',
    dependencies: [],
    devDependencies: []
  },
  createReactApp: {
    name: 'create-react-app',
    dependencies: [
      'axios',
      'dotenv',
      'history',
      'i18next',
      'keymirror',
      'localforage',
      'node-sass',
      'react-app-rewire-styled-components',
      'react-app-rewired',
      'react-redux',
      'redux',
      'redux-persist',
      'redux-thunk',
      'styled-components',
      'uuid',
      'react-router-dom'
    ],
    devDependencies: [
      'babel-plugin-styled-components',
      'redux-devtools-extension',
      'redux-logger'
    ]
  },
  reactNativeInit: {
    name: 'react-native-init',
    dependencies: [
      'keymirror',
      'react-native-gesture-handler',
      'react-native-vector-icons',
      'react-navigation',
      'redux',
      'react-redux',
      'redux-persist',
      'redux-thunk'
    ],
    devDependencies: ['redux-logger', 'redux-devtools-extension']
  },
  vue: {
    name: 'vue',
    dependencies: [],
    devDependencies: []
  }
};
