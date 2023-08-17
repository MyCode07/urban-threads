const guideOpenButtons = document.querySelectorAll('.measure__info button');

for (let i = 0; i < guideOpenButtons.length; i++) {
    const btn = guideOpenButtons[i];

    btn.addEventListener('click', (e) => {
        const content = btn.closest('.measure__info').querySelectorAll('.measure__info-content');
        const parent = document.querySelector('.measure');


        if (!parent.querySelector('_active')) {
            const openitem = parent.querySelector('.measure__info-content._active');

            if (openitem) {
                openitem.classList.remove('_active')
            }

            content.forEach(item => {
                item.classList.add('_active')
            })


        }

    })
}