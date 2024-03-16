import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const registrationUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const logInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const checkLogin = () => {
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    console.log(`user at the moment ${uid}`);
    return true;
  }
};
