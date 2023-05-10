const emailsel = document.querySelector('.emailsel');

const menuEmail = document.querySelector('.desktop__menu--container')

const HamMsel = document.querySelector('.menu-Hamburger');

const menuMobile = document.querySelector('.categories__list--container')

const closeMsel = document.querySelector('.close-menu');




emailsel.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
     menuEmail.classList.toggle('inactive');
}


HamMsel.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}


closeMsel.addEventListener('click', removeMobileMenu);

function removeMobileMenu() {
    menuMobile.classList.add('inactive');
}
