import { PasswordWithIDFormType } from '../../types';

type PasswordProps = {
  passwordInfo: PasswordWithIDFormType
  handleDelete: (id: string | number) => void
};

function Password({ passwordInfo, handleDelete }: PasswordProps) {
  const { serviceName, login, password, url, id } = passwordInfo;

  return (
    <div>
      <a target="_blank" href={ url } rel="noreferrer">{serviceName}</a>
      <div>
        Login
        {' '}
        <p>{login}</p>
        Senha
        {' '}
        <p>{password}</p>
      </div>
      <button onClick={ () => handleDelete(id) } data-testid="remove-btn">X</button>
    </div>
  );
}

export default Password;
