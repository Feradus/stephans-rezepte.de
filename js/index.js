document.querySelector('.burger-menu').addEventListener('click', toggleBurgerMenu);

let burgerMenuOpen = false;

function toggleBurgerMenu() {
	const burgerMenuOpenImg = document.querySelector('.burger-menu__open-img');
	const burgerMenuCloseImg = document.querySelector('.burger-menu__close-img');
	const navMenu = document.querySelector('.nav-menu');

	if (!burgerMenuOpen) {
		burgerMenuOpenImg.style.display = 'none';
		burgerMenuCloseImg.style.display = 'block';
		navMenu.style.display = 'flex';
	} else {
		burgerMenuOpenImg.style.display = 'block';
		burgerMenuCloseImg.style.display = 'none';
		navMenu.style.display = 'none';
	}
	burgerMenuOpen = !burgerMenuOpen;
}
