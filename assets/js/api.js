const api_url = "https://mindicador.cl/api";

const getIndicadores = async () => {
    try {
        const data = await (await fetch(api_url)).json();
        console.log('Datos obtenidos de la API:', data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    } finally {
        console.log('Proceso de obtención de datos finalizado.');
    }
};

getIndicadores();