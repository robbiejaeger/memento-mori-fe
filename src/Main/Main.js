import React from 'react';
import firebase from 'firebase';

function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default Main;