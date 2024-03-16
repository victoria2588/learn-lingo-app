import '../assets/css/read_more.css';

document.querySelectorAll('.tutor-read').forEach(parentContainer => {
  parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');
    if (!isReadMoreBtn) return;

    const currentSection = current.closest('.tutor-card');
    const index = currentSection.dataset.index;

    const additionalInfo = currentSection.querySelector('.tutor-readmore');

    if (additionalInfo) {
      current.classList.add('is-hidden');
      additionalInfo.classList.add('tutor-readmore--show');
    }
  });
});
