import { PasswordFormType, TargetType } from '../../types';
import './Form.css';

type FormProps = {
  handleCancel: () => void
  handleChange: ({ target }: TargetType) => void
  camps: PasswordFormType
  isFormCompleted: boolean
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

function Form(props: FormProps) {
  const { handleCancel, handleChange, camps, isFormCompleted, handleSubmit } = props;
  const { serviceName, login, password, url } = camps;

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="serviceName">
        Nome do Serviço
        <input
          type="text"
          name="serviceName"
          value={ serviceName }
          onChange={ handleChange }
          id="serviceName"
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          value={ login }
          onChange={ handleChange }
          id="login"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          id="password"
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          name="url"
          value={ url }
          onChange={ handleChange }
          id="url"
        />
      </label>

      <button disabled={ !isFormCompleted }>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </form>
  );
}

export default Form;