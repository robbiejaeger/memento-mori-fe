import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Loader from '../Loader/Loader';

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerAuthObserver();
  })

  function registerAuthObserver() {
    onAuthStateChanged(auth, (user) => changeLoginState(!!user));
  }

  function changeLoginState(loginState) {
    setIsLoggedIn(loginState);
    setIsLoading(false)
  }

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

export default App;
