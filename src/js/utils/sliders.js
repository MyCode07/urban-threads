import { Swiper, Lazy, Navigation, Autoplay } from "swiper";

const slider = document.querySelector('.bestsellers__slider');
const sliderSlides = document.querySelectorAll('.bestsellers__slider .swiper-slide');

if (sliderSlides.length) {
    new Swiper(slider, {
        modules: [
            Lazy, Navigation, Autoplay
        ],
        slidesPerView: 'auto',
        spaceBetween: 47,
        preloadImages: false,
        autoplay: true,
        speed: 1000,
        grabCursor: true,
        mousewheelControl: true,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: false
        },
        autoplay:
        {
            delay: 1,
        },
        watchSlidesProgress: true,
        watchOverflow: true,

    })
}