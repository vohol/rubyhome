const menuBtn = document.querySelector('.header__open-menu')
const navigationMenu = document.querySelector('.header__navigation')
const tabsButtons = document.querySelectorAll('.tabs__title')
const tabsElements = document.querySelectorAll('.tabs__element')

//init aos library
AOS.init();

//init selectors
NiceSelect.bind(document.getElementById('buy-location-selector'))
NiceSelect.bind(document.getElementById('buy-property-selector'))
NiceSelect.bind(document.getElementById('buy-price-selector'))
NiceSelect.bind(document.getElementById('rent-location-selector'))
NiceSelect.bind(document.getElementById('rent-property-selector'))
NiceSelect.bind(document.getElementById('rent-price-selector'))
NiceSelect.bind(document.getElementById('sell-location-selector'))
NiceSelect.bind(document.getElementById('sell-property-selector'))
NiceSelect.bind(document.getElementById('sell-price-selector'))

//init swiper
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  }
});


document.addEventListener('click', openNavigationMenu);

function openNavigationMenu(e) {
  const target = e.target;

  if (target.classList.contains('header__open-menu')) {
    navigationMenu.classList.toggle('active')
    menuBtn.classList.toggle('active-nav')
  }
}

document.addEventListener('click', tabHandler);
document.addEventListener('click', likeHandler);

function likeHandler(e) {
  const target = e.target;
  console.log(target);

  target.parentNode.classList.contains('heart') &&
    target.parentNode.classList.toggle('heart--red');
  target.classList.contains('heart') &&
    target.classList.toggle('heart--red');
} 

function tabHandler(e) {
  const target = e.target;

  if (target.classList.contains('tabs__title')) {
    tabsButtons.forEach(element => {
      element.classList.remove('tabs__title--active')
    });

    target.classList.add('tabs__title--active');

    tabsElements.forEach(element => {
      element.classList.remove('tabs__element--active')
      if (element.dataset.action == target.dataset.action) {
        element.classList.add('tabs__element--active')
      }
    });
  }
}