import '../assets/css/teachers.css';
import { checkLogin } from './firebase/auth.js';

const favEl = document.querySelector('.favorites');

export const favCreator = () => {
  if (checkLogin()) {
    console.log("We're logged in");
    favEl.classList.add('show');
  } else {
    console.log("We're not logged in at the moment");
  }
};
