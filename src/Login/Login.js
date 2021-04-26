import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <main>
      <p className="subtitle">Subscribe to notifications that reminder you that life is short.</p>
      <p className="subtitle">Login to subscribe.</p>

      <button onClick={signInWithGoogle}>Login with Google</button>

      <img className="skull-img" src="./skull.png" alt="skull" />
    </main>
  );
}

export default Login;
