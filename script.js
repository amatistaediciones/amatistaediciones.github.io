// Contador regresivo
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-03-01T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft >= 0) {
        countdownElement.innerHTML = `
            <div><span>${days}</span><p>Días</p></div>
            <div><span>${hours}</span><p>Horas</p></div>
            <div><span>${minutes}</span><p>Minutos</p></div>
            <div><span>${seconds}</span><p>Segundos</p></div>
        `;
    } else {
        countdownElement.innerHTML = '<p>¡El gran día ha llegado!</p>';
    }
}

setInterval(updateCountdown, 1000);

// Efecto de confeti
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`; // Colores variados
        document.body.appendChild(confetti);

        // Animar confeti y removerlo después
        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}

const popup = document.getElementById('popup');
const showPopupButton = document.getElementById('show-popup');
const closePopupButton = document.getElementById('close-popup');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'flex'; // Muestra el popup
    launchConfetti(); // Activa el confeti
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Cierra el popup
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Cierra si se hace clic fuera del contenido
    }
});

const playButton = document.getElementById('play-music');
const audio = document.getElementById('audio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing'); // Cambia el estado del botón
    } else {
        audio.pause();
        playButton.classList.remove('playing'); // Vuelve al estado original
    }
});


    // Función para mostrar/ocultar el menú cuando se hace clic en el botón ☰
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    });

    // Función para cerrar el menú cuando se hace clic en la cruz (X)
    document.querySelector('.menu-close').addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('active');
    });

    // Función para reproducir música cuando se hace clic en el botón de música
 
