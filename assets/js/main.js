const navInteractions = document.querySelector('#navInteractions');

// Toggle menu
const navOpen = document.querySelector('#nav-open');

function toggle() {
  navInteractions.classList.toggle('active');
  navOpen.classList.toggle('active');
}

navOpen.addEventListener('click', toggle);

// Nav link toggle menu
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', toggle));
