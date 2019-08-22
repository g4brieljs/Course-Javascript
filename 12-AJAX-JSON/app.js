const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const persona = JSON.parse(this.responseText);

            //construir un template

            const htmlTemplate = ` 
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                    <li>Empresa: ${persona.empresa}</li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();

});


// Empleados dos


const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const personal = JSON.parse(this.responseText);

            let htmlTemplate = '';
            personal.forEach(function(persona){
                htmlTemplate += `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                    <li>Empresa: ${persona.empresa}</li>
                </ul>
            `;
            });
            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }

    xhr.send();

});

