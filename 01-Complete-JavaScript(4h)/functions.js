//Functions JavaScript

// var nombre = prompt("Hey cómo te llamas?");

// saludo = `<p>Hola ${nombre}</p>`;

// function saludar(){
//      document.getElementById('app').innerHTML = saludo;
// }

// // saludar();

// /* Un parametro es algo que puede leer una funcion */

// function saludar2(nombre){
//     console.log(`Hola ${nombre}`);
// }

// // saludar2('Juan'); 

// /* Añadir un valor por defecto: */

// function saludar3(nombre = 'Guest'){
//     return `Hello ${nombre}`;
// }

// let saludo;
// saludo = saludar3();

// console.log(saludo);

/* Ordenes de la declaración de los parametros */+

const saludar = function(nombre = 'Gabriel', profesion = 'Desarrollador', edad = 19){
        return `Hola tienes ${edad}, te llamas ${nombre}, y eres ${profesion}`
    }

console.log(saludar('Juan')); //El orden será el mismo que los parametros de la funcion, cuando escribas algo aquí, se llenará en el orden de la function declarada.

