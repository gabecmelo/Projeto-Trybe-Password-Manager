import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Title/Title';
import RegisterPass from './components/RegisterPass/RegisterPass';
import INITIAL_STATES, { INITIAL_NON_VALID_STATES } from './states';
import PasswordFormType, { TargetType, CampsType } from './types';

function App() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [camps, SetCamps] = useState<PasswordFormType>(INITIAL_STATES);
  const [validCamps, setValidCamps] = useState<CampsType>(INITIAL_NON_VALID_STATES);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passIsValid, setPassIsValid] = useState<boolean>(false);

  const verifyPasswordRequirements = (value: string) => {
    const hasNumberRegex = /\d/;
    const hasLetterRegex = /[a-zA-Z]/;
    const hasSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const hasNumbersTest = hasNumberRegex.test(value);
    const hasLetterTest = hasLetterRegex.test(value);
    const hasSpecialCharTest = hasSpecialCharRegex.test(value);

    if (hasNumbersTest && hasLetterTest && hasSpecialCharTest) {
      setPassIsValid(true);
    } else {
      setPassIsValid(false);
    }
  };

  const verifyFormCompletion: () => void = () => {
    const allCampsValid = Object.values(validCamps).every((valid) => valid);
    setIsFormCompleted(allCampsValid && passIsValid);
  };

  useEffect(() => {
    verifyFormCompletion();
  }, [validCamps, isFormCompleted]);

  const verifyCamps = (name: string, value: string) => {
    if ((name === 'serviceName' || name === 'login') && value.length > 0) {
      setValidCamps({
        ...validCamps,
        [name]: true,
      });
    } else if (name === 'password' && value.length >= 8 && value.length <= 16) {
      setValidCamps({
        ...validCamps,
        [name]: true,
      });
      setPassword(value);
      verifyPasswordRequirements(value);
    } else if (name === 'password' && value.length > 16) {
      setValidCamps({
        ...validCamps,
        [name]: false,
      });
    }
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

    </div>
  );
}

export default App;
