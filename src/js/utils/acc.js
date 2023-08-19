import { isMobile } from "./isMobile.js";

const acc = document.querySelector('.acc');
const accOpenButton = document.querySelector('.header__account');
const accCloseButton = document.querySelector('.acc-close');


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

const fixedElems = document.querySelectorAll('._fixed');
export const lockPadding = () => {
    const paddingRight = 12; // scrollbarwidth

    if (fixedElems.length) {
        fixedElems.forEach(item => {
            item.style.paddingRight = paddingRight + 'px';
        });
    }
    document.body.style.paddingRight = paddingRight + 'px';
}

export const unLockPadding = () => {
    const paddingRight = 12; // scrollbarwidth

    if (fixedElems.length) {
        fixedElems.forEach(item => {
            item.style.paddingRight = 0 + 'px';
        });
    }
    document.body.style.paddingRight = 0 + 'px';
}
