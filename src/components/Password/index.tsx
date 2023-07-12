import { PasswordWithIDFormType } from '../../types';

type PasswordProps = {
  passwordInfo: PasswordWithIDFormType
  handleDelete: (id: string | number) => void
  hidePasswords: boolean
};

function Password({ passwordInfo, handleDelete, hidePasswords }: PasswordProps) {
  const { serviceName, login, password, url, id } = passwordInfo;

  return (
    <div className="passwordCard">
      <a target="_blank" href={ url } rel="noreferrer">
        {serviceName}
        {' '}
        📎
      </a>
      <div>
        <div className="loginDiv">
          <p>Login</p>
          <h3>{login}</h3>
        </div>
        <div className="passDiv">
          <p>Senha</p>
          {
          hidePasswords ? <h3>{'*'.repeat(password.length)}</h3> : <h3>{password}</h3>
        }
        </div>
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
