import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Title/Title';
import RegisterPass from './components/RegisterPass/RegisterPass';

function App() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);

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
        ? (<Form handleCancel={ handleCancel } />)
        : (<RegisterPass handleDisplay={ handleDisplay } />)}

    </div>
  );
}

export default App;
