import { PasswordWithIDFormType } from '../../types';
import Password from '../Password';

type PasswordListProps = {
  passwordCamps: PasswordWithIDFormType[]
  handleDelete: (id: string | number) => void
};

function PasswordList({ passwordCamps, handleDelete }: PasswordListProps) {
  return (
    <main>
      <div className="password-card">
        {passwordCamps.length === 0 && <h2>nenhuma senha cadastrada</h2>}
        {passwordCamps
          .map((password) => (<Password
            handleDelete={ () => handleDelete(password.id) }
            key={ password.id }
            passwordInfo={ password }
          />))}
      </div>
    </main>
  );
}

export default PasswordList;
