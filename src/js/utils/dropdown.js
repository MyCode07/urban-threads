
const dropDownbtn = document.querySelector('.dropdown');
const dropDownContent = document.querySelector('.dropdown div');

dropDownbtn.addEventListener('click', () => {
    dropDownbtn.classList.toggle('_active');
});