import React, { useState, useEffect } from 'react';
import { publicRoutes, authRoutes, appRoutes } from './routes';
import Paths from './paths';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppRoute from './AppRoute';
import { itemKey } from 'utils';
import _ from 'lodash';
import { AuthLayout, AppLayout, LandingLayout, NotFound } from 'layout';
import { Redirect } from 'react-router-dom';
import { Auth } from 'services';

const Routes = ({ location, isAuthorized }) => {
  useEffect(() => {
    if (isAuthorized) {
      Auth.authorize();
    }
  }, [isAuthorized]);

  const routes = [...publicRoutes, ...authRoutes, ...appRoutes];

  return (
    <Switch>
      {routes.map(route => (
        <Route
          exact
          path={route.path}
          key={itemKey}
          render={props => {
            if (
              authRoutes.map(route => route.path).includes(route.path) &&
              !isAuthorized
            ) {
              return <AuthLayout component={route.component} route={route} />;
            } else if (
              authRoutes.map(route => route.path).includes(route.path) &&
              isAuthorized
            ) {
              return <Redirect to={Paths.app} />;
            } else if (isAuthorized && route.private) {
              return <AppLayout component={route.component} route={route} />;
            } else if (!isAuthorized && route.private) {
              return (
                <Redirect
                  to={{ pathname: Paths.root, state: { from: props.location } }}
                />
              );
            } else {
              return (
                <LandingLayout component={route.component} route={route} />
              );
            }
          }}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.appState.isAuthorized
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

export { Paths };
