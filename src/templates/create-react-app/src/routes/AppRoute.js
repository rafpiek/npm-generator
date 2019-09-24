import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
import NormalRoute from './NormalRoute';
import _ from 'lodash';
import { Route } from 'react-router-dom';

const StyledWrapper = styled.div``;

const AppRoute = ({ route }) => {
  console.log('rr', route);
  if (route.private) {
    return (
      <PrivateRoute
        route={route}
        path={route.path}
        key={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  } else {
    console.log('here');
    return (
      <Route
        path={route.path}
        exact
        key={route.path}
        component={route.component}
      />
    );
  }
};

export default AppRoute;

AppRoute.propTypes = {};

AppRoute.defaultProps = {};
