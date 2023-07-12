type RegisterPassProps = {
  handleDisplay: (event: any) => void
};

function RegisterPass({ handleDisplay }: RegisterPassProps) {
  return (
    <button onClick={ handleDisplay }>Cadastrar nova Senha</button>
  );
}

export default RegisterPass;
