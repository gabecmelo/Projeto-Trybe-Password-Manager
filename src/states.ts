import { PasswordFormType } from './types';

const INITIAL_STATES = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
} as PasswordFormType;

export const INITIAL_NON_VALID_STATES = {
  serviceName: false,
  login: false,
  password: false,
  url: true,
};

export const INITIAL_PASSWORD_STATES = {
  hasNumbers: false,
  hasLetters: false,
  hasSpecialChars: false,
  hasCorrectLength: false,
};

export default INITIAL_STATES;
