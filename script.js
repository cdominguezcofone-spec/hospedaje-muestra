// Tu URL real de Google Apps Script proporcionada
const URL_WEB_APP = 'https://script.google.com/macros/s/AKfycbyLSOVEFFBfJQ-NJ32eFuNIzu74050AVp1yYd0gY0ESLJ7S-Xdw0pZZo6sGZ_K_D2RQBw/exec';

document.getElementById('formReserva').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const boton = document.getElementById('btnEnviar');
    const msgExito = document.getElementById('mensajeExito');
    const msgError = document.getElementById('mensajeError');
    
    // Escondemos alertas previas y cambiamos estado del botón
    msgExito.classList.add('hidden');
    msgError.classList.add('hidden');
    boton.disabled = true;
    boton.innerText = "Enviando datos...";

    // Preparar los datos del formulario
    const formData = new FormData(this);

    // Enviar datos usando fetch a Google Apps Script
    fetch(URL_WEB_APP, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Si el servidor responde correctamente
            document.getElementById('formReserva').reset(); // Limpia campos
            msgExito.classList.remove('hidden'); // Muestra mensaje verde
        } else {
            msgError.classList.remove('hidden'); // Muestra mensaje rojo si falla
        }
    })
    .catch(error => {
        console.error('Error en el envío:', error);
        msgError.classList.remove('hidden');
    })
    .finally(() => {
        // Restaurar botón
        boton.disabled = false;
        boton.innerText = "Confirmar Pre-Reserva";
    });
});
