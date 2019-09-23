import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Link = ({ to, children }) => {
  return <StyledLink to={to}>{children} </StyledLink>;
};

export default Link;

Link.propTypes = {};

Link.defaultProps = {};
