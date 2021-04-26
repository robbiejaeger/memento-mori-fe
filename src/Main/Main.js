import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import * as notification from '../notification';

function Main() {
  const auth = getAuth();

  const [userMessage, setUserMessage] = useState('');
  const [uid, setUID] = useState(null);

  function remindUser() {
    notification.subscribeUser(uid)
      .then(message => {
        setUserMessage(message);
      })
      .catch(err => {
        setUserMessage(err);
      });
  }

  function setUidForLoggedInUser() {
    setUID(auth.currentUser.uid);
  }

  useEffect(() => {
    setUidForLoggedInUser();
  })

  return (
    <div>
      <h1>MEMENTO MORI</h1>
      <p>Hello, {auth.currentUser.displayName}!</p>
      <p>{userMessage}</p>
      <button onClick={remindUser}>Remind Me</button>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Main;
