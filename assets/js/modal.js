document.addEventListener('DOMContentLoaded', function() {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const body = document.body;

    function openModal(modal) {
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
        body.style.height = '100%';
        modal.querySelector('.close').addEventListener('click', () => closeModal(modal));
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        body.style.overflow = '';
        body.style.height = '';
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            openModal(modal);
        });
    });
});