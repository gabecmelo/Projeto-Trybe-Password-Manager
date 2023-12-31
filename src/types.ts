export type PasswordFormType = {
  serviceName: string
  login: string
  password: string
  url: string
};

export type CampsType = {
  serviceName: boolean
  login: boolean
  password: boolean
  url: boolean
};

export type PasswordStateType = {
  hasNumbers: boolean
  hasLetters: boolean
  hasSpecialChars: boolean
  hasCorrectLength: boolean
};

export type TargetType = React.ChangeEvent<
HTMLInputElement |
HTMLSelectElement |
HTMLTextAreaElement>;

export type PasswordWithIDFormType = PasswordFormType & { id: string | number };
