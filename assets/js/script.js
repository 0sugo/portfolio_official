const projects = [
  {
    title: 'SUCCESS HC GROUP',
    description: 'SUCCESS HC GROUP is a website for success healthcare group based in australia.',
    stack: 'NextJs, Shadcn, Tailwind',
    imageSrc: './assets/images/successhcgroup.png',
    githubLink: '/',
    liveLink: 'https://successhcgroup.com.au',
  },
   {
    title: 'UNFPA',
    description: 'An interactive African map with clickable countries that had qualified with stunning innovations in the region alongside their videos.',
    stack: 'NextJs, Shadcn, Tailwind,',
    imageSrc: './assets/images/projo8.png',
    githubLink: '/https://github.com/0sugo/UNFPA.git',
    liveLink: 'https://unfpa.tuni.ke/',
  },
  {
    title: 'HEART OF HUMANITY FOUNDATION',
    description: 'HEART OF HUMANITY FOUNDATION is a website for a non-profit organization based in Norwa with a focus to assist poverty striken african communities.',
    stack: 'NextJs, Shadcn, Tailwind, Strapi',
    imageSrc: './assets/images/foundation.png',
    githubLink: '/',
    liveLink: '/',
  },
  {
    title: 'TUNI FOR MALLS',
    description: 'Tic-Tac-Toe game designed for malls inorder to increase customer/human engagement in malls in a bid to increase foot traffic in malls.',
    stack: 'NextJs, MySQL, Tailwind,Laravel,',
    imageSrc: './assets/images/projo7.png',
    githubLink: 'https://github.com/0sugo/Tuni',
    liveLink: 'https://github.com/0sugo/Tuni',
  },
  {
    title: 'AMAZING ANGELS',
    description: 'Amazing angels is a frontend only website that provides information about a care giving agency based in the US  and it allows you to book for an appointment with them.',
    stack: 'React, Tailwind',
    imageSrc: './assets/images/projo5.png',
    githubLink: 'https://github.com/0sugo/care',
    liveLink: 'https://www.amazingangels.us/',
  },
  {
    title: 'CALENDERIFIC',
    description: 'Calenderific is a web application that provides information about holidays in different countries around the world. It allows users to explore holidays by country and view details of individual holidays.',
    stack: 'React, Redux, CSS',
    imageSrc: './assets/images/projo2.png',
    githubLink: 'https://github.com/0sugo/calenderific',
    liveLink: 'https://calenderific.onrender.com',
  },

  {
    title: 'Pesha',
    description: 'Pesha is an expense management web and mobile application.Pesha is designed to streamline handling expenses, ensuring transparency, accountability, and efficiency. Whether you are a small business or an organization our expense management system is tailored to meet your needs.',
    stack: 'Laravel, VueJs, TailwindCss, Inertia',
    imageSrc: './assets/images/projo9.png',
    githubLink: '/',
    liveLink: 'https://pesha.co.ke',
  },
  {
    title: 'LEADERBOARD',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    stack: 'HTML, CSS, JS',
    imageSrc: './assets/images/projo4.png',
    githubLink: 'https://github.com/0sugo/leaderboard',
    liveLink: 'https://0sugo.github.io/leaderboard/dist/',
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
          <h6 >${project.stack}</h6>
          <p class="card-text">${project.description}</p>
          <div class="work-links">
            <a href="${project.githubLink}" target="_blank" class="">code</a>
            <a href="${project.liveLink}" target="_blank" class="sos">live</a>
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

// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar-link');

// Function to close the navbar
const closeNavbar = function () {
  navbar.classList.remove('active'); // Close the navbar
  navToggleBtn.classList.remove('active'); // Remove the active class from the toggle button
  overlay.classList.remove('active'); // Remove the overlay
  document.body.classList.remove('nav-active'); // Remove the nav-active class from the body
};

// Add click event listener to each navbar link
navbarLinks.forEach((link) => {
  link.addEventListener('click', closeNavbar);
});


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
