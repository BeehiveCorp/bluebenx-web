// Header border on scroll
const header = document.querySelector('.header');

document.onscroll = () => {
  if (this.scrollY > 10) header.classList.add('active');
  else header.classList.remove('active');
};
