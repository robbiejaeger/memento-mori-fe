import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import app from '../firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  }

  render() {
    return (
      <main>
        <h1>Memento Mori</h1>

        <section>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={app.auth()}/>
        </section>
      </main>
    )
  }
}

export default Login;