import { useEffect, useState } from 'react';
import { PasswordFormType, PasswordStateType, TargetType } from '../../types';
import './Form.css';

type FormProps = {
  handleCancel: (event: any) => void;
  handleChange: ({ target }: TargetType) => void;
  camps: PasswordFormType;
  isFormCompleted: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function Form(props: FormProps) {

  
  const { handleCancel, handleChange, camps, isFormCompleted,
    handleSubmit} = props;

  const { serviceName, login, password, url } = camps;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassVisibility = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <div className="form-field">
        <label htmlFor="serviceName" className="form-label">
          Nome do Serviço *
          <input
            type="text"
            name="serviceName"
            value={ serviceName }
            onChange={ handleChange }
            id="serviceName"
            className="form-input"
          />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="login" className="form-label">
          Login *
          <input
            type="text"
            name="login"
            value={ login }
            onChange={ handleChange }
            id="login"
            className="form-input"
          />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="password" className="form-label">
          Senha *
          <input
            type={ showPassword ? 'text' : 'password' }
            name="password"
            value={ password }
            onChange={ handleChange }
            id="password"
            className="form-input"
          />
          <button
            onClick={ togglePassVisibility }
            data-testid="show-hide-form-password"
            className="show-hide-password"
          >
            Mostrar Senha
          </button>
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="url" className="form-label">
          URL
          <input
            type="text"
            name="url"
            value={ url }
            onChange={ handleChange }
            id="url"
            className="form-input"
          />
        </label>
        <p>* Campos obrigatórios</p>
      </div>
      <div className="form-actions">
        <button disabled={ !isFormCompleted } className="button-primary">
          Cadastrar
        </button>
        <button onClick={ handleCancel } className="button-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Form;
