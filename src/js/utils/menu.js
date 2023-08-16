const menoBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');

menoBtn.addEventListener('click', () => {
    menoBtn.classList.toggle('_active');
    menu.classList.toggle('_open')
});
