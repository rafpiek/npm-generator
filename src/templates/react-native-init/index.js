import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import Router from '@/router';
import { Locales } from '@/config';

console.disableYellowBox = true;

const App = () => {
  Locales.init();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Router />
        <SafeAreaView>
          <Text>React Native Starter</Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
