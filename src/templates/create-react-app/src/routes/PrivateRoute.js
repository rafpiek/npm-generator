import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paths } from './';
import { AppLayout } from 'layout';
class PrivateRoute extends Component {
  render() {
    const { route, isAuthorized } = this.props;

    return (
      <Route
        path={route.path}
        exact={route.exact}
        key={route.path}
        render={props =>
          isAuthorized ? (
            <route.component {...props} />
          ) : (
            <Redirect
              to={{ pathname: Paths.root, state: { from: props.location } }}
            />
          )
        }
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
)(PrivateRoute);
