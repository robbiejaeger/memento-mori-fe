import React from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <main>
      <p>Subscribe to notifications that reminder you that life is short.</p>
      <p>Login to subscribe.</p>

      <button onClick={signInWithGoogle}>Login with Google</button>

      <img className="skull-full-img" src="./skull.png" alt="skull" />
    </main>
  );
}

export default Login;
