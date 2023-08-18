import { gsap } from "gsap";
import { isMobile } from "./isMobile.js";

if (!isMobile.any()) {
    const advantagesList = document.querySelectorAll('.advantages ol li');

    if (advantagesList.length) {

        advantagesList.forEach(item => {
            const img = item.querySelector('img');
            const animation = gsap.to(img, {
                opacity: 1,
                duration: 0.2,
                ease: "ease-in-out"
            });

            animation.reverse();
            item.addEventListener("mouseenter", () => animation.play());
            item.addEventListener("mouseleave", () => animation.reverse());
            item.addEventListener("mousemove", (e) => moveText(e, item));
        })
    }
}

function moveText(e, item) {
    const img = item.querySelector('img');
    const left = (e.clientX - item.getBoundingClientRect().left)
    const top = (e.clientY - item.getBoundingClientRect().top)

    gsap.to(img, {
        left: left,
        top: top,
        duration: 0.3,
    });
}