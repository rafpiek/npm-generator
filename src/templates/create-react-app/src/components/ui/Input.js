import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { emailValidator, passwordValidator } from 'utils/validators';
import { constants, t } from 'utils';

const StyledWrapper = styled.div`
  width: 30rem;
  padding: ${({ theme }) => theme.padding.m};
`;

const InputField = styled.input`
  height: 3.5rem;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.l};
  padding-left: ${({ theme }) => theme.padding.m};
  text-align: center;
  border-radius: 5px;
  border: 1px solid
    ${({ theme, valid }) =>
      valid ? theme.colors.secondary : theme.colors.danger};

  &:focus {
    border: 2px solid
      ${({ theme, valid }) =>
        valid ? theme.colors.primary : theme.colors.danger};
    box-shadow: 0 0 0.5rem
      ${({ theme, valid }) =>
        valid ? theme.colors.secondary : theme.colors.danger};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.default};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    text-transform: uppercase;
  }
`;

const ErrorLabel = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  padding: 5px;
  margin-top: 5px;
`;

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  validateParent
}) => {
  const [valid, setValid] = useState(true);

  const onInputChange = e => {
    const value = e.target.value;
    let isInputValid = false;
    if (type === constants.inputTypes.email) {
      isInputValid = emailValidator(value).isValid;
    } else if (type === constants.inputTypes.password) {
      isInputValid = passwordValidator(value).isValid;
    }

    if (!required && !value.length) {
      isInputValid = true;
    }

    setValid(isInputValid);
    validateInputParent(isInputValid);
    onChange(value);
  };

  const validateInputParent = valid => {
    validateParent(valid);
  };

  return (
    <StyledWrapper>
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        valid={valid}
      />
      {!valid && <ErrorLabel>{t(`validationErrors.${type}`)}</ErrorLabel>}
    </StyledWrapper>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder'
};
