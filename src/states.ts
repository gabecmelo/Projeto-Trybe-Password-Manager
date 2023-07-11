import PasswordFormType from './types';

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

export default INITIAL_STATES;
