document.addEventListener('DOMContentLoaded', () => {

    // --- MANEJO DEL MENÚ HAMBURGUESA ---
    const hamburgerBtn = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen); // Accesibilidad
        });

        // MEJORA: Cerrar el menú al hacer clic en un enlace (para móviles)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-open')) {
                    navMenu.classList.remove('is-open');
                    hamburgerBtn.classList.remove('is-open');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    // --- MANEJO DEL POP-UP DE CONTACTO ---
    const openContactBtn = document.getElementById('open-contact-form');
    const closeContactBtn = document.getElementById('close-contact-form');
    const contactPopup = document.getElementById('contact-popup');

    if (openContactBtn && closeContactBtn && contactPopup) {
        openContactBtn.addEventListener('click', () => contactPopup.classList.add('show'));
        closeContactBtn.addEventListener('click', () => contactPopup.classList.remove('show'));
    }


    // --- MEJORA: ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: deja de observar el elemento una vez revelado
                // observer.unobserve(entry.target);
            } else {
                 // Opcional: si quieres que la animación se repita al salir y volver a entrar
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // El elemento se revela cuando el 10% es visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // --- MEJORA: INDICADOR DE SECCIÓN ACTIVA EN NAVEGACIÓN ---
    const sections = document.querySelectorAll('section[id]');
    const navLinksForHighlight = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinksForHighlight.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Se activa cuando la sección está en el centro de la pantalla
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});
