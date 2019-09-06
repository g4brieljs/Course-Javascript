class UI {
    constructor() {
        
        // instanciar la API
        this.api = new API();

        // crear los markers con LayerGroup
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);

         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON.results;

                // Ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultado);
                // asi comunicamos las dos funciones
            })
    }

    mostrarPines(datos){
        // Limpiando los markers
        // antes de mandarlos a llamar
        this.markers.clearLayers();

        // recorrer los establecimiento
        datos.forEach(dato => {
            // destructuring
            const {latitude, longitude, calle, regular, premium } =  dato;


            // crear un PopUp
            const opcionesPopUp = L.popup()
                  .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b> $ ${regular}</p>
                    <p><b>Premium:</b> $ ${premium}</p>
                  `)   

            // agregar el PIN 
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);

            this.markers.addLayer(marker);
            
        });
        this.markers.addTo(this.mapa);

    }

    // buscador
    obtenerSugerencias(busqueda){
        // vamos a llamar la api de obtener datos
        this.api.obtenerDatos().then(datos =>{
            // obtener resultados
            const resultados = datos.respuestaJSON.results;

            // enviar el JSON y la busqueda 
            this.filtrarSugerencia(resultados, busqueda);
        })
    }
    // filtrar la sugerencias
    filtrarSugerencia(resultado, busqueda){
        // filtrar con .filter
        // indexOf determina que concuerde con el otro dato
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
        console.log(filtro);
        // mostrar los pines
        this.mostrarPines(filtro);
    }

}