import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from '../Login/Login';
import Main from '../Main/Main';

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerAuthObserver();
  })

  const registerAuthObserver = () => {
    onAuthStateChanged(auth, (user) => changeLoginState(!!user));
  }

  const changeLoginState = loginState => {
    setIsLoggedIn(loginState);
    setIsLoading(false)
  }

  let view;
  if (isLoading) {
    view = <h3>Loading...</h3>;
  } else {
    view = isLoggedIn ? <Main /> : <Login />;
  }

  return (
    <div className="App">
      <h1>MEMENTO MORI</h1>

      {view}
    </div>
  );
}

export default App;
