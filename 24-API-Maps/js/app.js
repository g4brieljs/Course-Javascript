const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

// habilitar busquedas de establecimientos

const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    if(buscador.value.length > 5){
        // buscara cuando sea mayor a 5
        ui.obtenerSugerencias(buscador.value);
    }else{
        ui.mostrarEstablecimientos();
    }
})