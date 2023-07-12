import './PasswordManager.css';
import { PasswordStateType } from '../../types';

type PasswordManagerProps = {
  passwordChecks: PasswordStateType
};

function PasswordManager({ passwordChecks }: PasswordManagerProps) {
  const { hasCorrectLength, hasLetters, hasNumbers, hasSpecialChars } = passwordChecks;

  const validClass = 'valid-password-check';
  const invalidClass = 'invalid-password-check';

  const validLength = hasCorrectLength ? validClass : invalidClass;
  const validLettersAndNumbers = hasLetters && hasNumbers ? validClass : invalidClass;
  const validChars = hasSpecialChars ? validClass : invalidClass;

  return (
    <div className="password-manager">
      <p className={ validLength }>Possuir 8 ou mais caracteres</p>
      <p className={ validLength }>Possuir até 16 caracteres</p>
      <p className={ validLettersAndNumbers }>Possuir letras e números</p>
      <p className={ validChars }>Possuir algum caractere especial</p>
    </div>
  );
}

export default PasswordManager;
