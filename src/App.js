import React, { Component } from 'react';
import Menu from './Components/Menu'
import Main from './Components/Main'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
