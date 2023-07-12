import { PasswordWithIDFormType } from '../../types';

type PasswordProps = {
  passwordInfo: PasswordWithIDFormType
  handleDelete: (id: string | number) => void
  hidePasswords: boolean
};

function Password({ passwordInfo, handleDelete, hidePasswords }: PasswordProps) {
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
        {
          hidePasswords ? <p>{'*'.repeat(password.length)}</p> : <p>{password}</p>
        }
      </div>
      <button
        onClick={ () => handleDelete(id) }
        data-testid="remove-btn"
      >
        X
      </button>
    </div>
  );
}

export default Password;
