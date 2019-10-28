import React from 'react';
import firebase from 'firebase';

function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}!</p>
      <button>Remind Me</button>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default Main;