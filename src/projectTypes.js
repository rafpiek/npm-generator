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
  },
  expressChat: {
    name: 'express-chat',
    dependencies: [
      "@babel/runtime",
      "babel-plugin-module-resolver",
      "body-parser",
      "cors",
      "dotenv",
      "express",
      "helmet",
      "mongoose",
      'morgan',
      'socket.io'
    ],
    devDependencies: [
      "@babel/core",
      "@babel/node",
      "@babel/plugin-transform-runtime",
      "@babel/preset-env",
      "nodemon"
    ]
  },
  expressWithJwt: {
    name: 'express-with-jwt',
    dependencies: [
      '@babel/runtime',
      'babel-plugin-module-resolver',
      'bcrypt',
      'body-parser',
      'dotenv',
      'express',
      'express-list-endpoints',
      'jsonwebtoken',
      'keymirror',
      'mongoose',
      'morgan',
      'helmet',
      'cors'
    ],
    devDependencies: [
      "@babel/cli",
      "@babel/core",
      "@babel/node",
      "@babel/plugin-transform-runtime",
      "@babel/preset-env",
      "@babel/register",
      "babel-polyfill",
      "chai",
      "mocha",
      "nodemon"
    ]
  },
  expressWithPassport: {
    name: 'express-with-passport',
    dependencies: [],
    devDependencies: []
  },
  gatsby: {
    name: 'gatsby',
    dependencies: [],
    devDependencies: []
  }
};
