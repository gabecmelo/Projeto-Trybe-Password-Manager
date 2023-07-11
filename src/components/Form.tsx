function Form() {
  return (
    <div>
      <label htmlFor="serviceName">
        Nome do Serviço
        <input
          type="text"
          name="serviceName"
          id="serviceName"
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          id="login"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          name="url"
          id="url"
        />
      </label>

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  );
}

export default Form;
