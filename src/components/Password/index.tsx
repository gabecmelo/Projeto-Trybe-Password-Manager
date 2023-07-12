import { PasswordFormType } from '../../types';

type PasswordProps = {
  passwordInfo: PasswordFormType
};

function Password({ passwordInfo }: PasswordProps) {
  const { serviceName, login, password, url } = passwordInfo;

  return (
    <div>
      <a href={ url }>{serviceName}</a>
      <p>{`Login ${login}`}</p>
      <p>{`senha ${password}`}</p>
    </div>
  );
}

export default Password;
