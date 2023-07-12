import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Title';
import RegisterPass from './components/RegisterPass';
import INITIAL_STATES, {
  INITIAL_NON_VALID_STATES,
  INITIAL_PASSWORD_STATES,
} from './states';
import { TargetType,
  CampsType,
  PasswordStateType,
  PasswordWithIDFormType,
  PasswordFormType } from './types';
import PasswordManager from './components/PasswordManager';
import PasswordList from './components/PasswordList';

function App() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [camps, SetCamps] = useState<PasswordFormType>(INITIAL_STATES);
  const [validCamps, setValidCamps] = useState<CampsType>(INITIAL_NON_VALID_STATES);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passIsValid, setPassIsValid] = useState<boolean>(false);

  const [passwordList, setPasswordList] = useState<PasswordWithIDFormType[]>([]);
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

  const handleDelete = (removeById: string | number) => {
    const removedPasswords = passwordList
      .filter((password) => password.id !== removeById);
    setPasswordList(removedPasswords);
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

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();

    setId(id + 1);

    const newPassword = {
      id,
      ...camps,
    };

    setPasswordList([
      ...passwordList,
      newPassword,
    ]);

    setDisplayForm(false);
    SetCamps(INITIAL_STATES);
  };

  return (
    <div>
      <Header />
      {displayForm
        ? (
          <div>
            <Form
              isFormCompleted={ isFormCompleted }
              camps={ camps }
              handleChange={ handleChange }
              handleCancel={ handleCancel }
              handleSubmit={ handleSubmit }
            />
            <PasswordManager
              passwordChecks={ passwordChecks }
            />
          </div>
        )
        : (<RegisterPass handleDisplay={ handleDisplay } />)}
      <PasswordList handleDelete={ handleDelete } passwordCamps={ passwordList } />
    </div>
  );
}

export default App;
