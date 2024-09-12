// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3HbKT59VGfRYHiagUyFwbTJdX8CzvqgA",
  authDomain: "login-page-575a7.firebaseapp.com",
  projectId: "login-page-575a7",
  storageBucket: "login-page-575a7.appspot.com",
  messagingSenderId: "691627277662",
  appId: "1:691627277662:web:1f5c88b8b064f5324da3cf",
  measurementId: "G-NX7S4TNLXW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
