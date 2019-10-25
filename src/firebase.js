import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvPeQMobRjWj20SrFuoJUSrMfMyLfdPL4',
  authDomain: "memento-mori-8609a.firebaseapp.com",
  projectId: 'memento-mori-8609a'
};

const app = firebase.initializeApp(firebaseConfig);

export default app;