import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();


    // Go to acces date from form
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        // Cmpos vacios, mostrar error
        UI.divMensajes.innerHTML = 'Error... Debe rellenar todos los campos';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    }else {
        // Form completo, consultar API
        const api = new API(artista, cancion);
        api.consultarAPI()
        // Siempre devuelve la promesa
            .then(data =>{
                if(data.respuesta.lyrics){
                    // Existe cancion
                    const letra = data.respuesta.lyrics;
                    UI.divResultado.textContent = letra;
                }else{
                    // No existe cancion
                    UI.divMensajes.innerHTML = 'No tenemos esa cancion, prueba con otra búsqueda.';
                    UI.divMensajes.classList.add('error');
                    UI.divResultado.textContent = '';
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    }, 3000);
                }
            })
    }

})