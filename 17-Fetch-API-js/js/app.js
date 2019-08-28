document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);



function cargarTXT(){
    // busca la url
    fetch('datos.txt')
    // Usamos las promises
    // In this case return res
    // In the FETCH API you has define how to show this respond
    // Luego regresa el contenido de este archivo con el parametro res
    // luego devuelve el valor text

    // ## Este primero trae la inf
        .then(function(res){
            // luego le pides que tipo de informacion es:
            return res.text();
        })
        // luego le pasas el dato con esta funcion
        .then(function(data){
            document.getElementById('resultado').innerHTML = data;
        })
        // por si es un error
        .catch(function(error){
            console.log(error);
        })
}


// ## JSON


function cargarJSON() {
    fetch('empleados.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let html = '';
            data.forEach(empleado => {
                html += `
                    <li>${empleado.nombre} es ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

// ## Fetch API

function cargarREST(){ 
    fetch('https://picsum.photos/list')
        .then(res =>{
            return res.json();
        })
        .then(imagenes =>{
            let html = '';
            imagenes.forEach(imagen =>{
                html += `
                    <li>
                        <a href="${imagen.post_url}">Ver imagen</a>
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
}