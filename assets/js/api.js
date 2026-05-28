export async function fetchIndicadores() {

    const api_url = "https://mindicador.cl/api";

    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Datos obtenidos de la API:', data);
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    } finally {
        console.log('Proceso de obtención de datos finalizado.');
    }
}