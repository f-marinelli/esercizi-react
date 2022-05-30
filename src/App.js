import { LanguageContext } from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <select value={language} onChange={handleLanguage}>
        <option value="en">english</option>
        <option value="it">italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
