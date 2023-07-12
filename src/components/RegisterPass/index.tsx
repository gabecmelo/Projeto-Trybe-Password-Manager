type RegisterPassProps = {
  handleDisplay: () => void
};

function RegisterPass({ handleDisplay }: RegisterPassProps) {
  return (
    <button onClick={ handleDisplay }>Cadastrar nova senha</button>
  );
}

export default RegisterPass;
