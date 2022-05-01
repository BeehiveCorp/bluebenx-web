const navInteractions = document.querySelector('#navInteractions');

// Toggle menu
const navOpen = document.querySelector('#nav-open');

function toggle() {
  navInteractions.classList.toggle('active');
  navOpen.classList.toggle('active');
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
