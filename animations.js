document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hex-animation-container');
    if (!container) return; // Si el contenedor no existe, no hacer nada

    const createHexagon = () => {
        const hex = document.createElement('div');
        hex.classList.add('flying-hexagon');

        // Posición aleatoria en la pantalla
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        hex.style.left = `${x}vw`;
        hex.style.top = `${y}vh`;
        
        // Duración aleatoria más lenta para un efecto más orgánico
        const duration = Math.random() * 5 + 3; // Duración entre 3 y 8 segundos (más lenta)
        hex.style.animationDuration = `${duration}s`;

        container.appendChild(hex);

        // Eliminar el hexágono del DOM después de que termine su animación
        setTimeout(() => {
            hex.remove();
        }, duration * 1000);
    };

    // Crear un nuevo hexágono cada segundo
    setInterval(createHexagon, 1000);

    // Inicializar el efecto 3D "Tilt" en las tarjetas
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 15,        // Inclinación máxima en grados
        speed: 400,     // Velocidad de la animación
        glare: true,    // Añade un efecto de reflejo de luz
        "max-glare": 0.4, // Intensidad del reflejo
    });

    // Lógica para animaciones al hacer scroll
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Añade la clase si es visible
            } else {
                entry.target.classList.remove('is-visible'); // Quita la clase si no es visible, para que se anime de nuevo
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px', // Empieza la animación un poco antes de que llegue al fondo
        threshold: 0.1
    });

    // Observar todos los elementos que deben animarse
    document.querySelectorAll('.scroll-animate').forEach(element => {
        scrollObserver.observe(element);
    });
});