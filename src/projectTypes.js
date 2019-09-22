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
      'redux-logger',
      'eslint',
      'eslint-plugin-react'
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
      'redux-thunk',
      '@babel/preset-env',
      'i18next',
      'babel-plugin-module-resolver',
      'prop-types',
      'react-navigation-stack',
      'react-native-reanimated',
      'react-native-screens@^1.0.0-alpha.2'
    ],
    devDependencies: [
      'redux-logger',
      'redux-devtools-extension',
      '@babel/plugin-proposal-class-properties'
    ]
  },
  vue: {
    name: 'vue',
    dependencies: [],
    devDependencies: []
  }
};
