import React, { Component } from 'react';
import Menu from './Components/Menu'
import Main from './Components/Main'
import './styles/app.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

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
