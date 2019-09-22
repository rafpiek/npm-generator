import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.padding.xs};
  color: ${({ theme }) => theme.colors.white};
  height: 50px;
  width: 10rem;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s linear;

  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.secondary};
  }

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;

const Button = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button',
  disabled: false
};
