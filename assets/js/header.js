document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.header__mobile-burger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.overlay');

    burgerButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        burgerButton.classList.toggle('open');
        overlay.classList.toggle('open');
        document.querySelector('.header').classList.toggle('open');

        if (mobileMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});