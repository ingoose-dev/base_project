addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const btnEnviar = document.getElementById('btn_enviar');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');



    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: '¡Formulario enviado!',
            text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        });
        form.reset();
    });
});