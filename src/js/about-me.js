import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.about-me__list', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
    elementClass: 'about-me__item',
    triggerClass: 'about-me__inner',
    panelClass: 'about-me__details',
    collapse: true,
    beforeOpen: element => {
      const arrowIcon = element.querySelector('.about-me__icon');
      if (arrowIcon) {
        arrowIcon.style.transform = 'rotate(180deg)';
      }
    },
    beforeClose: element => {
      const arrowIcon = element.querySelector('.about-me__icon');
      if (arrowIcon) {
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
const swiper = new Swiper('.about-me__skills', { 
  modules: [Navigation, Keyboard],
  simulateTouch: true,
  touchRatio: 1,
  touchEventsTarget: 'container',
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.about-me__skills-button-next',
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  on: {
    slideChange: function () {
      highlightActiveSkill(this);
    },
  },

  touchEventsTarget: 'wrapper',
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  grabCursor: true,
});

function highlightActiveSkill(swiper) {
  swiper.slides.forEach(skill => skill.classList.remove('active'));
  swiper.slides[swiper.activeIndex].classList.add('active');
}

  highlightActiveSkill(swiper);
});
setTimeout(() => {
  const nextButton = document.querySelector('.about-me__skills-button-next');
  if (nextButton) {
    nextButton.classList.remove('swiper-button-lock', 'swiper-button-disabled');
  }
  swiper.update(); // Оновлюємо Swiper
}, 500);
