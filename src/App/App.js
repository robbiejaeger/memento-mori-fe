import React, { Component } from 'react';
import './App.scss';
import app from '../firebase';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Loader from '../Loader/Loader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.registerAuthObserver();
  }

  registerAuthObserver() {
    app.auth().onAuthStateChanged(
        (user) => this.changeLoginState(!!user)
    );
  }

  changeLoginState = loginState => {
    this.setState({isLoggedIn: loginState, isLoading: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isLoading = this.state.isLoading;
    let view;

    if (isLoading) {
      view = <Loader />;
    } else {
      view = isLoggedIn ? <Main /> : <Login />;
    }

    return (
      <div className="App">
        {view}  
      </div>
    );
  }
}

export default App;
