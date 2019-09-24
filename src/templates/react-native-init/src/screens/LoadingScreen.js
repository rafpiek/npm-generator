import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen } from 'components';
import PropTypes from 'prop-types';

const LoadingScreen = ({ children }) => {
  return (
    <Screen>
      <Text>oading Screen</Text>
    </Screen>
  );
};

export default LoadingScreen;
