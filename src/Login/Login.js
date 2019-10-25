import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import app from '../firebase';

function Login() {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  return (
    <main>
      <h1>Memento Mori</h1>

      <section>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()}/>
      </section>
    </main>
  );
}

export default Login;