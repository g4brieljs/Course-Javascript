class API {
    async obtenerDatos() {
        
        const total = 100;

        // obtener date from api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // to JSON
        const respuestaJSON = await datos.json();
        console.log(respuestaJSON);

        return{
            respuestaJSON
        }
        
    }
}

