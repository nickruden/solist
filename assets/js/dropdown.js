document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.my-dropdown-control').forEach(function(control) {
        const dropdownId = control.id;
        const dropdownMenu = document.querySelector(`.my-dropdown-menu[data-id="${dropdownId}"]`);

        control.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('show');
            control.classList.toggle('open');
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest(`#${dropdownId}`)) {
                dropdownMenu.classList.remove('show');
                control.classList.remove('open');
            }
        });
    });
});