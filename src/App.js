import React from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

export class App extends React.Component {
  state = {
    language: 'en',
  };

  handleLanguage = (e) => {
    this.setState({ language: e.target.value });
  };

  render() {
    return (
      <>
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value="en">english</option>
          <option value="it">italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </>
    );
  }
}
