import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { publicRoutes } from './routes';
import NormalRoute from './NormalRoute';

const StyledWrapper = styled.div``;

const PublicRoutes = ({}) => {
  return (
    <switch>
      {publicRoutes.map(route => (
        <NormalRoute
          route={route}
          path={route.path}
          key={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </switch>
  );
};

export default PublicRoutes;

PublicRoutes.propTypes = {};

PublicRoutes.defaultProps = {};
