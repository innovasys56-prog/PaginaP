
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('legalModal');
        const acceptBtn = document.getElementById('acceptTermsBtn');
        const privacyLinkNav = document.getElementById('privacyLinkNav');
        const privacyLinkFooter = document.getElementById('privacyLinkFooter');

        // Comprueba si el usuario ya aceptó los términos previamente
        if (!localStorage.getItem('terminosAceptados')) {
            // Si no los ha aceptado, muestra el modal con un pequeño retraso
            setTimeout(() => {
                modal.classList.add('show');
            }, 500); // 500ms para dejar que terminen las animaciones de fondo
        }

        // Función para abrir el modal desde los enlaces
        const openModal = (e) => {
            e.preventDefault(); // Evita que el enlace navegue
            modal.classList.add('show');
        };

        if (privacyLinkNav) privacyLinkNav.addEventListener('click', openModal);
        if (privacyLinkFooter) privacyLinkFooter.addEventListener('click', openModal);

        // Función para cerrar y guardar la aceptación
        acceptBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            // Guarda un registro en el navegador para que no vuelva a salir
            localStorage.setItem('terminosAceptados', 'true');
        });
    });