import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Screen } from 'components';
import PropTypes from 'prop-types';

const LoginScreen = ({ children, style, ...rest }) => {
  const [loginVisible, toggleRegistration] = useState(true);

  return (
    <Screen>
      <Text>Login Screen</Text>
    </Screen>
  );
};

export default LoginScreen;

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};
