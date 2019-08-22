document.getElementById('cargar').addEventListener('click', cargarDatos);

// AJAX

function cargarDatos(){
    // Crear el objeto xmlhttprequiest
    // ESTE objeto tiene todas las propiedades de AJAX, que vien en XMLHttpRequest
    // Puede abrir texto, JSON,solo es su nombre, XML
    const xhr = new XMLHttpRequest();
    // Abrir conexión 
    // Primer parametro son los REQUEST 
    // GET para datos
    // Enviar al databsae con POST new
    // Update PUT
    // Eliminando DELETE
    // DEbes definir las url que podemos eliminar con lo request
    // Segundo Parametros es la url, en este caso es un txt
    // Luego si es Asincrono o no
    xhr.open('GET', 'datos.txt', true); 

    // UNa vez que carga 
    //### Forma anterior ### // 
    // xhr.onload = function(){
       
    //     // 200: Correcto [403: Prohibido | 404: No se ha encontrado]
    //     // this.status es una instancia del Objeto XMLHttpRequest
    //     // if(this.status === 200){
    //     //     //this.responseText
    //     //     document.querySelector('#listado').innerHTML = `<h1>${this.responseText}</h1>`; 
    //     // }
    // }

    // ## FORMA MODERNA ## 

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);
        }
    }
    
    // ready Status
    /* 
        0. No se ha iniciado
        1. Conexion establecida
        2. Reibido
        3. PRocesado
        4. Respuesta lista
    */
    

    // ENviar el mensaje
    xhr.send(); 
        
}