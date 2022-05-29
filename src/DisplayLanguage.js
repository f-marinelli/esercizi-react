import React from 'react';
import { LanguageContext } from './LanguageContext';

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <>
        <LanguageContext.Consumer>
          {(language) => <h1>{language}</h1>}
        </LanguageContext.Consumer>
      </>
    );
  }
}
