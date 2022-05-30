import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      <h1>{language}</h1>
    </>
  );
};

export default DisplayLanguage;
