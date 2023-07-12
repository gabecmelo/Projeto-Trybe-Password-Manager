import { useState } from 'react';
import { PasswordWithIDFormType } from '../../types';
import Password from '../Password';

type PasswordListProps = {
  passwordCamps: PasswordWithIDFormType[];
  handleDelete: (id: string | number) => void;
};

function PasswordList({ passwordCamps, handleDelete }: PasswordListProps) {
  const [hidePasswords, setHidePasswords] = useState<boolean>(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setHidePasswords(target.checked);
  };

  return (
    <main>
      {passwordCamps.length > 0 && (
        <label htmlFor="hide-password">
          Esconder Senhas
          {' '}
          <input
            checked={ hidePasswords }
            onChange={ handleChange }
            type="checkbox"
            name="hide-password"
            id="hide-password"
          />
        </label>
      )}

      <div className="password-card">
        {passwordCamps.length === 0 && <h2>nenhuma senha cadastrada</h2>}
        {passwordCamps.map((password) => (
          <Password
            hidePasswords={ hidePasswords }
            handleDelete={ () => handleDelete(password.id) }
            key={ password.id }
            passwordInfo={ password }
          />
        ))}
      </div>
    </main>
  );
}

export default PasswordList;
