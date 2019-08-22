
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e){
    e.preventDefault();

    // read to  the variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;

    // building the url
    let url = '';
    // ? se usa cuando quieres enviar mas parametros en la url
    url += 'http://uinames.com/api/?'

     // Si hay origen agregarlo a la URL
    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`
    }
    // si hay genero aggregarlo a la url
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    // si hay una cantida, agregarlo a la url
    if(cantidad !== ''){
        url += `amount=${cantidad}&`;
    }

    console.log(url);

    // Imrpimiendo la consulta REST-API con AJAX

    // Conectar con AJAX

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Abrimos la conexion
    xhr.open('GET', url, true);
    // Datos e impresion
    xhr.onload = function(){
        if(this.status === 200){
            const nombres = JSON.parse(this.responseText);
            // Template HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';

            //

            htmlNombres += '<ul class="lista">';

            // Print each Name
            nombres.forEach(function(nombre){
                htmlNombres += `

                    <li>${nombre.name}

                `;
            })

            htmlNombres += '</ul>'

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    // Enviar el Request
    xhr.send();

}


