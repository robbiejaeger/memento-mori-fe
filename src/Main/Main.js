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
      <p>Hello, {auth.currentUser.displayName}!</p>
      <p>Click <em>Remind Me</em> to recieve push notifications on this device. You'll be reminded that life is short every few days.</p>
      <p>Hope you make the most of it.</p>
      <p class="status-msg">{userMessage}</p>
      <button onClick={remindUser}>Remind Me</button>
      <button onClick={() => auth.signOut()}>Logout</button>

      <img className="skull-cutoff-img" src="./skull.png" alt="skull" />
    </div>
  );
}

export default Main;
