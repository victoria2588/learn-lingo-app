import { registrationUser } from './firebase/auth.js';
import { addData, getData } from './firebase/db.js';
import { showLoginPopup, hideLoginPopup } from './login-popup.js';

import '../assets/css/home.css';
import '../assets/css/popup_registation.css';
import '../assets/css/popup_login.css';

const btnRegEl = document.querySelector('#registrationButton');
const popupRegEl = document.querySelector('.js-popup-container');
const modalCloseBtnEl = document.querySelector('.modal-close-btn');
const formEl = document.querySelector('.popup-reg-form');

const logInButtonEl = document.getElementById('logInButton');
logInButtonEl.addEventListener('click', showLoginPopup);

btnRegEl.addEventListener('click', () => {
  popupRegEl.classList.add('show');
  document.body.classList.add('no-scroll');
});

popupRegEl.addEventListener('click', e => {
  if (!e.target.classList.contains('js-popup-container')) return;
  hideModal();
});

modalCloseBtnEl.addEventListener('click', e => {
  hideModal();
});

function hideModal() {
  popupRegEl.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

formEl.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const { name, email, password } = Object.fromEntries(
      new FormData(e.target)
    );
    registrationUser(email, password);
    addData({ name, email, password });
    hideModal();
  } catch ({ message }) {
    console.log(message);
  }
});

getData()
  .then(r => {
    console.log(Object.values(r));
  })
  .catch(e => {
    console.log(e);
  });

// show favEl in case logged in on page opening
import { favCreator } from './favorites.js';
favCreator();
