const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const sideMenu = document.querySelector('.side-menu');
const sideLinks = document.querySelectorAll('.menu-list a');

let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (menuOpen === false) {
        menuBtn.classList.add('open');
        menuOpen = true;
        overlay.style.display = 'block';
        sideMenu.style.left = '65%';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        overlay.style.display = 'none';
        sideMenu.style.left = '100%';
    }
    
})

sideLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.style.left = '100%';
        overlay.style.display = 'none';
        menuOpen = false;
        menuBtn.classList.remove('open');
    });
})