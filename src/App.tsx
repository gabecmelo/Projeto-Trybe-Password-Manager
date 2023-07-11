import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Title/Title';
import RegisterPass from './components/RegisterPass/RegisterPass';
import INITIAL_STATES, {
  INITIAL_NON_VALID_STATES,
  INITIAL_PASSWORD_STATES,
} from './states';
import PasswordFormType, { TargetType, CampsType, PasswordStateType } from './types';
import PasswordManager from './components/PasswordManager';

function App() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [camps, SetCamps] = useState<PasswordFormType>(INITIAL_STATES);
  const [validCamps, setValidCamps] = useState<CampsType>(INITIAL_NON_VALID_STATES);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passIsValid, setPassIsValid] = useState<boolean>(false);

  const [passwordChecks, setPasswordChecks] = useState<
  PasswordStateType>(INITIAL_PASSWORD_STATES);

  const verifyPasswordRequirements = (value: string) => {
    const hasNumberRegex = /\d/;
    const hasLetterRegex = /[a-zA-Z]/;
    const hasSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const hasCorrectLength = value.length >= 8 && value.length <= 16;
    const hasNumbersTest = hasNumberRegex.test(value);
    const hasLetterTest = hasLetterRegex.test(value);
    const hasSpecialCharTest = hasSpecialCharRegex.test(value);

    setPasswordChecks({
      hasLetters: hasLetterTest,
      hasNumbers: hasNumbersTest,
      hasSpecialChars: hasSpecialCharTest,
      hasCorrectLength,
    });

    if (hasNumbersTest && hasLetterTest && hasSpecialCharTest) {
      setPassIsValid(true);
    } else {
      setPassIsValid(false);
    }
  };

  const verifyFormCompletion: () => void = () => {
    const { serviceName, login, password } = validCamps;
    const requiredFieldsCompleted = serviceName && login && password;
    setIsFormCompleted(requiredFieldsCompleted && passIsValid);
  };

  useEffect(() => {
    verifyFormCompletion();
  }, [validCamps, isFormCompleted]);

  const verifyCamps = (name: string, value: string) => {
    let isValid = false;

    if (name === 'serviceName' || name === 'login') {
      isValid = value.length > 0;
    } else if (name === 'password') {
      setPasswordValue(value);
      verifyPasswordRequirements(value);
      isValid = value.length >= 8 && value.length <= 16;
    } else if (name === 'url') {
      isValid = true;
    }

    setValidCamps({
      ...validCamps,
      [name]: isValid,
    });
  };

  const handleChange = ({ target }: TargetType) => {
    const { name, value } = target;
    SetCamps({
      ...camps,
      [name]: value,
    });
    verifyCamps(name, value);
  };

  const handleDisplay: () => void = () => {
    setDisplayForm(true);
  };

  const handleCancel: () => void = () => {
    setDisplayForm(false);
  };

  return (
    <div>
      <Header />
      {displayForm
        ? (<Form
            isFormCompleted={ isFormCompleted }
            camps={ camps }
            handleChange={ handleChange }
            handleCancel={ handleCancel }
        />)
        : (<RegisterPass handleDisplay={ handleDisplay } />)}
      <PasswordManager passwordChecks={ passwordChecks } />
    </div>
  );
}

export default App;
