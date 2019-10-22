import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    this.state = {
      isLoggedIn: false;
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let view;

    if (this.state.loggedIn) {
      // view = <Login />;
    } else {
      // view = <Main />;
    }

    return (
      <div className="App">
        {view}  
      </div>
    );
  }
}

export default App;
