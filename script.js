// Script para el pop-up de contacto
const openContactBtn = document.getElementById('open-contact-form');
const closeContactBtn = document.getElementById('close-contact-form');
const contactPopup = document.getElementById('contact-popup');

function openForm() {
    contactPopup.classList.add('show');
}

function closeForm() {
    contactPopup.classList.remove('show');
}

if (openContactBtn) {
    openContactBtn.addEventListener('click', openForm);
}
if (closeContactBtn) {
    closeContactBtn.addEventListener('click', closeForm);
}

// Script para el menú hamburguesa
const hamburgerBtn = document.getElementById('hamburger-button');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('is-open');
        hamburgerBtn.classList.toggle('is-open');
    });
}
