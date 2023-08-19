import { isMobile } from "./isMobile.js";
import { lockPadding, unLockPadding } from "./popup.js";

const acc = document.querySelector('.popup-account');
const accOpenButton = document.querySelector('.header__account');
const accCloseButton = document.querySelector('.popup-account__close');


if (accOpenButton)
    accOpenButton.addEventListener('click', function (e) {
        e.preventDefault();

        acc.classList.add('_open');
        document.body.classList.add('_noscroll');

        if (!isMobile.any()) {
            lockPadding()
        }
    })

if (accCloseButton) {
    accCloseButton.addEventListener('click', function () {
        acc.classList.remove('_open');
        document.body.classList.remove('_noscroll');

        if (!isMobile.any()) {
            unLockPadding()
        }
    })

    acc.addEventListener('click', function (e) {
        if (e.target.classList.contains('_open')) {
            acc.classList.remove('_open')
            document.body.classList.remove('_noscroll');
            unLockPadding()
        }
    })
}



const searchBtn = document.querySelector('.header__search');
const searchForm = document.querySelector('.header__search-form');
const searchFormClsoe = document.querySelector('.header__search-close');
if (searchBtn)
    searchBtn.addEventListener('click', () => {
        searchBtn.classList.add('_active')
        searchForm.classList.add('_active')
    })

if (searchFormClsoe)
    searchFormClsoe.addEventListener('click', () => {
        searchBtn.classList.remove('_active')
        searchForm.classList.remove('_active')
    })

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('add-to-cart')) {
        e.preventDefault()

        document.querySelector('.header__cart').classList.add('_active');
        const outputCount = document.querySelector('.header__cart .count')
        outputCount.dataset.count++;
        outputCount.textContent = outputCount.dataset.count;
    }
})