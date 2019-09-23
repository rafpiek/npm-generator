import React, { useSelector } from 'react';
import history from 'config/history';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes, { PublicRoutes } from 'routes';
import { AppLayout } from 'layout';

const App = ({ isAuthorized }) => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.appState.isAuthorized
});

export default connect(mapStateToProps)(App);
