import './RegisterPass.css';

type RegisterPassProps = {
  handleDisplay: (event: any) => void
};

function RegisterPass({ handleDisplay }: RegisterPassProps) {
  return (
    <button
      className="register-password-button"
      onClick={ handleDisplay }
    >
      Cadastrar nova Senha
    </button>
  );
}

export default RegisterPass;
