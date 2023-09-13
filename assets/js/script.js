const projects = [
  {
    title: 'CALENDERIFIC',
    description: 'Dive into the world of a math magician where you can make calculations while getting a peak inside the brilliant minds of the greatest mathematicians.',
    imageSrc: './assets/images/projo2.png',
    githubLink: 'https://github.com/0sugo/calenderific',
    liveLink: 'https://calenderific.onrender.com',
  },
  {
    title: 'CASH FLOW NEXUS',
    description: 'Dive into the world of a math magician where you can make calculations while getting a peak inside the brilliant minds of the greatest mathematicians.',
    imageSrc: './assets/images/projo1.png',
    githubLink: 'https://github.com/0sugo/cash-flow-nexus',
    liveLink: 'https://cash-flow-nexus.onrender.com/',
  },
  {
    title: 'LEADERBOARD',
    description: 'Dive into the world of a math magician where you can make calculations while getting a peak inside the brilliant minds of the greatest mathematicians.',
    imageSrc: './assets/images/projo4.png',
    githubLink: 'https://github.com/0sugo/leaderboard',
    liveLink: 'https://0sugo.github.io/leaderboard/dist/',
  },
  {
    title: 'MATH MAGICIAN',
    description: 'Dive into the world of a math magician where you can make calculations while getting a peak inside the brilliant minds of the greatest mathematicians.',
    imageSrc: './assets/images/projo6.png',
    githubLink: 'https://github.com/0sugo/math-magician',
    liveLink: 'https://math-magician-2bon.onrender.com',
  },
];

function generateProjectCards() {
  const dynamicProjectsContainer = document.getElementById('dynamic-projects');

  projects.forEach((project) => {
    const projectCard = document.createElement('li');
    projectCard.classList.add('slider-item');
    projectCard.innerHTML = `
      <div class="portfolio-card" style="--width: 600; --height: 600;">
        <img src="${project.imageSrc}" width="600" height="600" loading="lazy" alt=${project.title} class="img-cover">
        <div class="card-content">
          <h3 class="h3 card-title">${project.title}</h3>
          <p class="card-text">${project.description}</p>
          <div class="work-links">
            <a href="${project.githubLink}" class="">code</a>
            <a href="${project.liveLink}" class="sos">live</a>
          </div>
        </div>
      </div>
    `;

    dynamicProjectsContainer.appendChild(projectCard);
  });
}

generateProjectCards();

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i += 1) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PRELOADER
 */

const preloader = document.querySelector('[data-preloader]');

window.addEventListener('DOMContentLoaded', () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded');
});

/**
 * NAVBAR
 * navbar toggle for mobile
 */

const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
};

addEventOnElements(navTogglers, 'click', toggleNavbar);

/**
 * HEADER
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll('[data-slider]');

const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector('[data-slider-container]');
  const sliderPrevBtn = currentSlider.querySelector('[data-slider-prev]');
  const sliderNextBtn = currentSlider.querySelector('[data-slider-next]');

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue('--slider-items'));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos += 1;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener('click', slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos -= 1;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener('click', slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * slide with [shift + mouse wheel]
   */

  currentSlider.addEventListener('wheel', (event) => {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });

  /**
   * RESPONSIVE
   */

  window.addEventListener('resize', () => {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue('--slider-items'));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });
};

for (let i = 0, len = sliders.length; i < len; i += 1) { initSlider(sliders[i]); }

// Form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('message', document.getElementById('message').value);

  const errorMsg = document.getElementById('form-error');
  const email = document.getElementById('email');

  if (email.value !== email.value.toLowerCase()) {
    errorMsg.textContent = 'Email should be in lowercase !';
    errorMsg.style.visibility = 'visible';

    setTimeout(() => {
      errorMsg.style.visibility = 'hidden';
      email.value = '';
    }, 3000);

    event.preventDefault();
  } else if (email.validity.typeMismatch) {
    errorMsg.textContent = 'Please enter a valid email address';
    errorMsg.style.visibility = 'visible';
    email.value = '';

    setTimeout(() => {
      errorMsg.style.visibility = 'hidden';
    }, 3000);

    event.preventDefault();
  } else {
    errorMsg.style.visibility = 'hidden';
  }
});
