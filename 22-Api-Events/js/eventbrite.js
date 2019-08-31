class EventBrite {
    // cuando se instancia, se cargue en el constructor
    constructor(){
        this.token_auth = 'A4MURGXBFIEGVNP2DH7Y';
        this.ordernar = 'date';
    }

    // Mostrar resultado de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordernar}&categories=${categoria}&token=${this.token_auth}`);

        // Esperar la respuesta y devolverlo como JSON
        const eventos = await respuestaEvento.json();

        return{
            eventos
        }
    }

    // obtener las categorias en init
    // async
    async obtenerCategorias(){
        // consultar las categorias a la REST API de event brite
        const respuestaCategoria = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Esperar las respuestas de la categorias y devolver un JSON
        const categorias = await respuestaCategoria.json();

        // devolvemos el resultado
        return{
            categorias
        }
    }
}