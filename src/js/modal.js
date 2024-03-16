import '../assets/css/modal-book-lesson.css';

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');

  console.log('modal:', modal);
  console.log('backdrop:', backdrop);
  console.log('openModalButtons:', openModalButtons);
  console.log('closeModalButtons:', closeModalButtons);

  function openModal() {
    console.log('Opening modal');
    modal.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    console.log('Closing modal');
    modal.classList.add('is-hidden');
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(function (button) {
    button.addEventListener('click', openModal);
  });

  closeModalButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });

  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  });
});

//очищаю форму
const bookButton = document.querySelector('.form-btn');
const bookForm = document.getElementById('js-bookForm');

bookButton.addEventListener('click', function (e) {
  handleFormSubmit(e, bookForm);
});

function handleFormSubmit(e, form) {
  e.preventDefault();

  const formData = {
    name: form.elements.fullname.value,
    email: form.elements.email.value,
    phone: form.elements.phone.value,
  };

  if (!formData.email.trim() || !formData.phone.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    console.log(formData);
    form.reset();
  }
}
