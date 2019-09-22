import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Paths from './paths';
import LandingLayout from '../layout/LandingLayout';
import { authRoutes } from './routes';
import { AuthLayout } from 'layout';

class NormalRoute extends Component {
  render() {
    const { route } = this.props;

    return (
      <Route
        path={route.path}
        exact
        key={route.path}
        component={route.component}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.appState.isAuthorized
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormalRoute);
