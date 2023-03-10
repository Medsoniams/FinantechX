const headerBurger = document.querySelector('.header__burger');
const headerMobileNav = document.querySelector('.header__mobile-inner');

headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMobileNav.classList.toggle('active');
})