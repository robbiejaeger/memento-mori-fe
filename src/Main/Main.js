import React, { Component } from 'react';
import firebase from 'firebase';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    )
  }
}

export default Main;