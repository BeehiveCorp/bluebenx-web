const navInteractions = document.querySelector('#navInteractions');
const header = document.querySelector('.header');

// Toggle menu
const navOpen = document.querySelector('#nav-open');

function toggle() {
  navInteractions.classList.toggle('active');
  navOpen.classList.toggle('active');
  header.classList.toggle('active');
}

function handleCloseNavInteractions() {
  if (navInteractions.classList.contains('active')) toggle();
}

navOpen.addEventListener('click', toggle);

// Nav link click should toggle menu
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link =>
  link.addEventListener('click', handleCloseNavInteractions)
);

// Outside touch should toggle menu
const main = document.querySelector('.main');
main.addEventListener('click', handleCloseNavInteractions);

// Toggle popup
const popup = document.getElementById('loginPopup');
const backgroundPopup = document.getElementById('backgroundLoginPopup');
const loginBtn = document.getElementById('loginBtn');

function toggleLogin() {
  popup.classList.toggle('active-popup');
  backgroundPopup.classList.toggle('active-popup');
}

loginBtn.addEventListener('click', toggleLogin);
backgroundPopup.addEventListener('click', toggleLogin);
