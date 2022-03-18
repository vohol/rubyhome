const menuBtn = document.querySelector('.header__open-menu')
const navigationMenu = document.querySelector('.header__navigation')
const tabsButtons = document.querySelectorAll('.tabs__title')
const tabsElements = document.querySelectorAll('.tabs__selection')

document.addEventListener('click', openNavigationMenu);

function openNavigationMenu(e) {
  const target = e.target;

  if (target.classList.contains('header__open-menu')) {
    navigationMenu.classList.toggle('active')
    menuBtn.classList.toggle('active-nav')
  }
}

document.addEventListener('click', tabHandler);

function tabHandler(e) {
  const target = e.target;

  if (target.classList.contains('tabs__title')) {
    tabsButtons.forEach(element => {
      element.classList.remove('tabs__title--active')
    });
    tabsElements.forEach(element => {
      element.classList.remove('tabs__selection--active')
    });
    target.classList.add('tabs__title--active')
    target.nextElementSibling.classList.add('tabs__selection--active')
  }
}

NiceSelect.bind(document.getElementById('buy-location-selector'))
NiceSelect.bind(document.getElementById('buy-property-selector'))
NiceSelect.bind(document.getElementById('buy-price-selector'))
NiceSelect.bind(document.getElementById('rent-location-selector'))
NiceSelect.bind(document.getElementById('rent-property-selector'))
NiceSelect.bind(document.getElementById('rent-price-selector'))
NiceSelect.bind(document.getElementById('sell-location-selector'))
NiceSelect.bind(document.getElementById('sell-property-selector'))
NiceSelect.bind(document.getElementById('sell-price-selector'))