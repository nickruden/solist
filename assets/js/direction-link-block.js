const slider = document.querySelector('.directions-link-block__slider');
const blockButtons = document.querySelector('.directions-link-block__buttons');
const expandButton = document.querySelector('.directions-link-block__button');
const buttonText = expandButton.querySelector('.custom-button-text');

expandButton.addEventListener('click', () => {
    slider.classList.add('open');
    blockButtons.style.display = "none";
});