// Instanciar ambas clases
// Esto nos permite instanciar las clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    console.log(textoBuscador);
    console.log(categoriaSeleccionada);

    // revisar que haya algo escrito en el buscador
    if(textoBuscador !== ''){
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if(eventos.eventos.events.length > 0){
                    ui.limpiarResultados();
                    // Si hay eventos mostrar el resultado
                    ui.mostrarEventos(eventos.eventos);
                }else{
                    // No hay eventos 
                    ui.mostrarMensaje('No hay eventos', 'alert alert-danger mt-4 text-center');
                }
            })
    }else{
        // Mostrar mensaje para que print thing
        ui.mostrarMensaje('Debes escribir algo en el buscador', 'alert alert-danger mt-4 text-center');
    }
})