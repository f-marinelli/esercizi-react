import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';

function App() {
  const handleLogin = (state) => {
    console.log(state);
  };

  return (
    <>
      <Login onLogin={handleLogin} />
      <hr />
      <InteractiveWelcome />
    </>
  );
}

export default App;
