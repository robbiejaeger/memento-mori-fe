import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login';
import Main from '../Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const view = isLoggedIn ? <Main /> : <Login />;

    return (
      <div className="App">
        {view}  
      </div>
    );
  }
}

export default App;
