const tutorAvatars = document.querySelectorAll('.tutor-avatar');

tutorAvatars.forEach(avatar => {
  const index = avatar.getAttribute('data-index');
  avatar.style.backgroundImage = `url('../assets/img/pictures/${index}.jpg')`;
});
