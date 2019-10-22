import React, { Component } from 'react';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';

import Login from '../Login/Login';
import Main from '../Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.initializeAuth();
    this.checkIfLoggedIn();
  }

  initializeAuth = () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBvPeQMobRjWj20SrFuoJUSrMfMyLfdPL4',
      authDomain: "memento-mori-8609a.firebaseapp.com",
      projectId: 'memento-mori-8609a'
    };

    firebase.initializeApp(firebaseConfig);
  }

  checkIfLoggedIn = () => {
    if (firebase.auth().currentUser) {
      this.setState({isLoggedIn: true});
    } else {
      this.setState({isLoggedIn: false});
    }
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
