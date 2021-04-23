import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import * as notification from '../notification';

function Main() {
  const [userMessage, setUserMessage] = useState('');
  const [uid, setUID] = useState(null);

  function remindUser() {
    notification.subscribeUser(uid)
      .then(message => {
        console.log(message)
        setUserMessage(message);
      })
      .catch(err => {
        setUserMessage(err);
      });
  }

  function setUidForLoggedInUser() {
    setUID(firebase.auth().currentUser.uid);
  }

  useEffect(() => {
    setUidForLoggedInUser();
  })

  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}!</p>
      <p>{userMessage}</p>
      <button onClick={remindUser}>Remind Me</button>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default Main;