// Toggle menu
const navInteractions = document.querySelector('#navInteractions');
const navOpen = document.querySelector('#nav-open');
const navClose = document.querySelector('#nav-close');

[navOpen, navClose].map(toggle =>
  toggle.addEventListener('click', () => {
    navInteractions.classList.toggle('active');
  })
);
