// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const menuEl = document.querySelector('.btn-mobile-nav');
menuEl.addEventListener('click', function () {
  menuEl.parentElement.classList.toggle('nav-open');
});

// Scrolling
const allLinks = document.querySelectorAll('a:link');

Array.from(allLinks).forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = link.getAttribute('href');
    menuEl.parentElement.classList.remove('nav-open');

    if (href === '#') {
      // Scroll back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);

      window.scrollTo({
        top: sectionEl.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    // Set to null to refer to viewport
    root: null,
    // Triggers when 0% of the specified element is inside the viewport
    threshold: 0,
    rootMargin: '-80px',
  }
);

observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement('div');
//   flex.style.display = 'flex';
//   flex.style.flexDirection = 'column';
//   flex.style.rowGap = '1px';

//   flex.appendChild(document.createElement('div'));
//   flex.appendChild(document.createElement('div'));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add('no-flexbox-gap');
// }
// checkFlexGap();
