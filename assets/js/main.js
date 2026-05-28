import { fetchIndicadores } from './api.js';

function crearTarjeta(indicador) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '20rem';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h6');
    title.className = 'card-title';
    title.textContent = indicador.nombre;

    const value = document.createElement('p');
    value.className = 'card-text';
    value.textContent = `Valor: ${indicador.valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}`;

    cardBody.appendChild(title);
    cardBody.appendChild(value);
    card.appendChild(cardBody);

    return card;
}

async function mostrarIndicadores() {
    try {
        const data = await fetchIndicadores();
        const indicadoresContainer = document.getElementById('indicadores');
        indicadoresContainer.innerHTML = '';

        const card = crearTarjeta(data.uf);
        indicadoresContainer.appendChild(card);

        const card2 = crearTarjeta(data.dolar);
        indicadoresContainer.appendChild(card2);

        const card3 = crearTarjeta(data.euro);
        indicadoresContainer.appendChild(card3);

        const card4 = crearTarjeta(data.utm);
        indicadoresContainer.appendChild(card4);


    } catch (error) {
        console.error('Error al mostrar los indicadores:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarIndicadores();
});