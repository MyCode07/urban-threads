import { isMobile } from "./isMobile.js";
import { lockPadding, unLockPadding } from "./popup.js";

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


const accountPopup = document.querySelector('.popup-account');

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('add-to-cart')) {
        e.preventDefault()

        document.querySelector('.header__cart').classList.add('_active');
        const outputCount = document.querySelector('.header__cart .count')
        outputCount.dataset.count++;
        outputCount.textContent = outputCount.dataset.count;
    }


    if (targetEl.classList.contains('open-account')) {
        e.preventDefault();
        accountPopup.classList.add('_open');
        document.body.classList.add('_noscroll');

        if (!isMobile.any()) {
            lockPadding()
        }
    }

    if (targetEl.classList.contains('popup-account__close') || targetEl.classList.contains('popup-account')) {
        accountPopup.classList.remove('_open');
        document.body.classList.remove('_noscroll');

        if (!isMobile.any()) {
            unLockPadding()
        }
    }
})