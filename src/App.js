import React from 'react';
import { GlobalStyle } from './components/globalStyle';
import Header from './components/Header.components';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;
