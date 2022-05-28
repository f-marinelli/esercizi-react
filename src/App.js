import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { UncontrolledLogin } from './UncontrolledLogin';

function App() {
  const handleLogin = (state) => {
    console.log(state);
  };

  return (
    <>
      <Login onLogin={handleLogin} />
      <UncontrolledLogin onLogin={handleLogin} />
      <hr />
      <InteractiveWelcome />
    </>
  );
}

export default App;
