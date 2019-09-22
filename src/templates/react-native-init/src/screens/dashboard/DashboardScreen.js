import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Screen } from 'components';
import PropTypes from 'prop-types';

const DashboardScreen = props => {
  return (
    <Screen>
      <Text>DashboardScreen</Text>
    </Screen>
  );
};

export default DashboardScreen;

DashboardScreen.propTypes = {};

DashboardScreen.defaultProps = {};
