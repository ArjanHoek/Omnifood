// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const menuEl = document.querySelector('.btn-mobile-nav');
menuEl.addEventListener('click', function () {
  menuEl.parentElement.classList.toggle('nav-open');
});
