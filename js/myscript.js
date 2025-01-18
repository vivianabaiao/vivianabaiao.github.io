document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navMenu.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('active');
            menuOpen = false;
        }
    });
});