import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>React Native Starter</Text>
      </SafeAreaView>
    </>
  );
};

AppRegistry.registerComponent(appName, () => App);
