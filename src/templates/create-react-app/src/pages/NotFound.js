import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LandingContainer from './LandingContainer';

const StyledWrapper = styled.div``;

const NotFound = ({}) => {
  return (
    <StyledWrapper>
      <h1>Not Found</h1>
    </StyledWrapper>
  );
};

export default NotFound;

NotFound.propTypes = {};

NotFound.defaultProps = {};
