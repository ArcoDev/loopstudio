addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('men-mov');
    const icon = document.getElementById('icon');
    const link = document.getElementById('link');
    if (menu) {
        menu.addEventListener('click', () => {
            icon.classList.toggle("bars");
            icon.classList.toggle("cerrar");
            link.classList.toggle("anima-link");
        });
    }
});