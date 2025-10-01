// Seleccionamos los elementos de la página
const openBtn = document.getElementById('open-contact-form');
const closeBtn = document.getElementById('close-contact-form');
const contactPopup = document.getElementById('contact-popup');

// Función para abrir el formulario
function openForm() {
    contactPopup.classList.add('show');
}

// Función para cerrar el formulario
function closeForm() {
    contactPopup.classList.remove('show');
}

// Escuchamos los clics en los botones
openBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);