class API {
    async obtenerDato s(){
        // obtener date from api
        const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
        // to JSON
        const respuestaJSON = await datos.json();

        return{
            respuestaJSON
        }
    }
}