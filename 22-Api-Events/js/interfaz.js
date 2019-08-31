class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        // Read Results
        this.listado = document.getElementById('resultado-eventos');
    }

    // Cuando la app incie, cargaremos este método
    init(){
        // imprimir categorias de la REST API
        this.imprimirCategoria();
    }

    // print category
    imprimirCategoria(){
        const listaCategorias = eventbrite.obtenerCategorias()
        // Siempre que usemos un Async Await debemos devulve un promise
            .then(categorias => {
                const cats = categorias.categorias.categories;
                // Seleecionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');

                //recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    // creamos los option
                    const option = document.createElement('option');
                    // agregando un value al option
                    option.value = cat.id;
                    // agregando un texto al option
                    option.appendChild(document.createTextNode(cat.name_localized));
                    // agregamos nuestros option al select seleccionado
                    selectCategoria.appendChild(option);
                });
            })
    }

    // Lee la respuesta de la API e imrprime los resultados
    mostrarEventos(eventos){
        // leer los eventos y agregarlos a una variable
        const listaEventos = eventos.events;

        // Recorrer el arreglo y crear el TEMPLATE
        listaEventos.forEach(evento =>{
            this.listado.innerHTML += `

                <div class="col-md-4 mb-4">
                     <div class="card">       
                        <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">

                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Informacion del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>

            `;
        })
    }  
    
    // Limpiar los resultados previos
    limpiarResultados(){
        this.listado.innerHTML = '';
    }

    // Metodo for print mensajes: 2 parametros: mensaje y clase
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        //agregando el texto
        div.appendChild(document.createTextNode(mensaje));
        // Buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        // remover el div despues de 3 segundo
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    // Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
            const alert = document.querySelector('.alert');
            if(alert){
                alert.remove();
            }
    }
}