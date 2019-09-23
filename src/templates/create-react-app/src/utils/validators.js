import { constants } from 'utils';

export const emailValidator = text => ({
  isValid: constants.regex.email.test(text)
});

export const passwordValidator = text => ({
  isValid: constants.regex.password.test(text)
});
