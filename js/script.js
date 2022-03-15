const menuBtn = document.querySelector('.header__open-menu')
const navigationMenu = document.querySelector('.header__navigation')

document.addEventListener('click', openNavigationMenu);

function openNavigationMenu(e) {
  const target = e.target;

  if (target.classList.contains('header__open-menu')) {
    navigationMenu.classList.toggle('active')
    menuBtn.classList.toggle('active-nav')
  }
}