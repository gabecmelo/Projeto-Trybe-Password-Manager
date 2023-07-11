type PasswordFormType = {
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

export type TargetType = React.ChangeEvent<
HTMLInputElement |
HTMLSelectElement |
HTMLTextAreaElement>;

export default PasswordFormType;
