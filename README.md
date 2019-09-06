# Course of Javascript Complete from zero the to build app with React and Nodejs
**Summary Of course:**

First learned Fundamentals of Javascript, and later Events, funcitions, and Local Storage.

## Table of Contents
- [Local Storage and Event Delegation](#projects-with-local-Storage-and-event-delegation)
- [Class in Javascript](#class-in-javascript)
-  [AJAX in Javascript](#ajax-in-javascript)
- [API in Javascript](#apis-in-javascript)
- [Rest API](#rest-apis-in-javascript)
- [Rest API Endpoints and Request](#rest-api-endpoints-and-request)
- [Rest API Example](#rest-api-example)
- [Syncrhonous code in Javascript](#syncrhonous-and-asyncrhonous-code-in-javascript)
- [Callbacks in Javascript](#callbacks)
- [Promises in Javascript](#promises)
- [Async Awaiy in Javascript](#async-await)
- [Fetch API vs AJAX](#fetch-api-vs-ajax--converting-ajax-project-with-fetch-api)
- [Projects with Fetch API - Async Await - Class - Arrow Functions](#seventh-project--using-fetchapi---async-await---class---arrow-function)



# Projects with Local Storage and Event Delegation

# First Project

In this first project i builded a litte app what it allows add new tweet and the front-end, the first concept so you understan better, i create my const selecting the place for print the new Tweet.

**You can add the Local Storage:**

  `localStorage.setItem('tweets', JSON.stringify(tweets)); `


![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/04-LolcalStorage(Twitter)/Twitter/tweet.png)

# Second Project

![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/05-PrimerProyecto(Carrito)/carrito/Carshop.png)

# Third project

![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/06-SegundoProyecto(Email)/email/Email.png)

# Projects With EcmaScritp 6

# Class in Javascript 

```javascript
class Client(){
  constructor(name, salary){
    this.name = name;
    this.saldo = salary;
  }
  
  //Here we can print prototypes
  printSalary(){
    return `Hello ${this.name}, you salary is $${this.salary} `
  }
}
```
# Fourth project | Class in Javscript and constructor

![carsecure](https://github.com/g4brieljs/Course-Javascript/blob/master/09-cotizaSeguro/cotizador-coches.png)

# Fiveth project | Class in Javscript and constructor

![gastos](https://github.com/g4brieljs/Course-Javascript/blob/master/10-GastoSemanal-Class/gasto-semanal.png)

# AJAX in Javascript 

```javascript
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
```

# API'S in Javascript 

**API** = Application Pramaming Interface
In basic terms, API's just allow applications to communite with one another.

**Excelent blog, for to learn about API's**
(https://medium.com/@perrysetgo/what-exactly-is-an-api-69f36968a41f)

**And this is my blog** 
(g4brieljs.com)

Example: google maps API

# REST API's in Javascript

**REST** = Representational State Transfer
Rest describe how resources can be made available.

# REST API EndPoints and Request

A **REST API** has Endpoints (or Urls) to perform CRUD operations.

-List all **GET** clients /clients
-Get a single **GET** client /clients/10
-create a new **POST** client /clients
-Edit a **PUT** contact /costumers/3
-Delete a **DELETE** contact /costomers/8

# REST API Example

Building The URL, to which we pass the data provided by the user, and with this Rest API you can print with AJAX

```javascript
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

```

# Sixth project | REST-API's and AJAX and Javascript

![generadorNames](https://github.com/g4brieljs/Course-Javascript/blob/master/14-Project-WithRESTAPI/generador-Names.png)

# Syncrhonous and Asyncrhonous Code in Javascript 

 The **Syncrhonous** code is executed **from the first line to the last**.  

The **Asyncrhonous** code **can be executed any part of the code without for another part of it**.
This code is more used when you use API or REST API, if you charge 1000 clients in you website, you no want stop you website.

**Example**

XMLHhttRequest and FETCH API

**In Javsacript you will have at your disposal these functions to create asyncrhonous code:**

-Callbacks
-Promises
-Async/Await

**For to learn more**

- **Callbacks/Spanish**(https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- **Promises/Spanish**(https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)
- **Async-Await/Spanish**(https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)
- **Callbacks-vs-promises-vs-asyncAwait/English**(https://medium.com/@ThatGuyTinus/callbacks-vs-promises-vs-async-await-f65ed7c2b9b4)

# Callbacks 

```javascript
// Add new client later two second
function newClient(clients, callback){
    setTimeout(function(){
        client.push(clients);
        callback();
    }, 2000);
}

// The clients show later one second
function showClient(){
    // simulando un servidor
    setTimeout(function(){

        let html = '';

        client.forEach(function(clients){
            html += `<li>${clients}</li>`;
        });
        document.getElementById('app').innerHTML = html;

    }, 1000);
}
```

# Promises 

```javascript
const applyOffer = new Promise(function(resolve, reject){
    // Simulando a Error
    const offer = false;
    if(offer){
        resolve('Apply Offer for you');
    }else{
        reject('You no have Offer');
    }
});

// you ever use then with cath
applyOffer.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
```

# Async Await

```javascript
async function readTodos(){
    // Wait the answer
    const answer = await fetch('https://jsonplaceholder.typicode.com/todos');

    const date = await answer.json();

    return date;

}

readTodos()
    .then( users => console.log(users));
```

# Fetch API vs AJAX | Converting AJAX project, with FETCH API

```javascript
 fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let html = '<h2>Nombres generados</h2>';
            html += `<ul class="lista">`;

            data.forEach(names => {
                html += `
                    <li>${names.name}</li>
                `;
            });

            html += `</ul>`;

            document.querySelector('#resultado').innerHTML = html;
        })
```

# Seventh project | Using FetchAPI - Async Await - Class - Arrow Function 
**Look project**(https://g4brieljs.github.io/cryptocurrency-quote/index.html)
![currencyQuotes](https://github.com/g4brieljs/Course-Javascript/blob/master/21-cryptocurrency-quote/crypto.png)

# Eighth project | Using FetchAPI - Async Await - Class - Arrow Function 
**Look project**(https://g4brieljs.github.io/API-Events/)
![ApiEvents](https://github.com/g4brieljs/Course-Javascript/blob/master/22-Api-Events/APIevents.png)

# EcmaScript 6

### Destructuring 
```js

const client = {
    type: 'Premium',
    dates : {
        name: 'Gabriel',
        lastname: 'Jimenez',
        direction: {
            city: 'Santo Domingo'
        }
    },
    move: ['12', '13', '14']
}

let{
    type,
    dates: {direction},
    move : [ , , three]
} = client;
```

### Symbols
Javascript tiene 5 propiedades pritivas, y symbols es uno de estas

```js
const simbolo = Symbol();

let person = {};

person[name] = 'G4brieljs';

console.log(person[name]);
```

### Sets
**What is set** permite creare una lista de valores, sin duplicaciones.
```js
let car = new Set(1,2,3,1,2,3);
console.log(car);
output: 1,2,3.
```
//Saber si hay algun elemento
```js
console.log(car.has(2));
```
// Eliminar algun elmento
```js
car.delete(3);
```
// Borrar totalmente
```js
car.clear();
```

// Iterandolos
```js
car.forEach((producto) =>{
    consolelog(producto);
})
```
**Importante** Las llaves y el valor de los sets son iguales.

**Convertir un set en un array normal**

const arrayCar = [...car];

### Maps
```js
let client = new Map();
client.set('nombre', 'Gabriel');

console.log(client.get('nombre');
```

### Iteradores

```js

function crearIterador(carrito){
    //incializamos el indice
    let i = 0;

    return{
        siguiente: () => {
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined;

            return{
                fin: fin,
                valor: valor
            }
        }
    }
}


const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorreCarrito = crearIterador(carrito);

console.log(recorreCarrito.siguiente());
```

### Generadores Javascript

```js
// Los generadores son funciones que retornan iteradores, se indican con * despues de la palabra funtion

function *crearGenerador(){
    // usas la palabra yield
    yield 1;
    yield 'Nombre';
    yield 3 + 3;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
```

# Regular expressions

Las expresiones regulares te permiten validar datos de manera más precisa, y buscar valores de manera más rápida.

```js
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2000';

console.log(expReg.test(valor));
```

**More** (https://github.com/g4brieljs/Course-Javascript/blob/master/23-EcmaScript6/regularExpression.js)

![regular](https://github.com/g4brieljs/Course-Javascript/blob/master/23-EcmaScript6/regular.png)

# Nineth project | Using - LeafLet FetchAPI - Async Await - Class - Arrow Function 

**Look project**(https://g4brieljs.github.io/API-Events/)

![ApiEvents](https://github.com/g4brieljs/Course-Javascript/blob/master/24-API-Maps/apimaps.png)

# Modules in Javascript

### What is module?

A **Module** in programming will allow us to group related functionality in the same file in this way, as our project grows, it will be easier to maintain and better organized.

The main advantage of a module is that we can use it where required, leaving the rest of the program hidden for the rest of the code and also reuse the code.

### Benefits

- Dividir el código en pequeños archivos con funcionalidad relacionada.
- Un módulo puede ser utilizado fácilmente en otra aplicación.
- Dependencias
- Evitan conflicto con el nombre de las variables.

### What is a dependecies?

Un módulo puede y deb estar conectado con otro módulo, esa relación se conoce como dependencia.

Si un módulo requiere una pieza de otro módulo, se dique que "depende de se módulo"

### Evitan el scope

La idea de crear módulos también nos ayuda a evitar que si tenemos 2 módulos con la función cliente, esto no tengan un conflicto.

`module1.cliente();`
`module2.cliente();`

### Desventajas de utilizar muchos archivos JS 

- Cada script es un llamdao HTTP, lo cual hace el sitio web más lento.
- Cada script detiene la ejecución mientras se descarga.
- El manejo de las dependencias es manual: si tienes una función en el archivo B y se utiliza en el archivo A sin haberse cargado, tendrás un problema.

## Module in Javascript

### Import var

```js
export const nameVar = 'G4brieljs';
```

```js
import { nameVar } from './file.js';
```

### Import function

```js
export function nameFunction(name){
    return `Client: ${name}`;
}
```

```js
import { nameFunction } from './file.js';
```

### Import Class

```js
export class Client {
    constructor(name){
        this.name = name;
    }
}
```
```js
import { Client } from './file.js';
```

# Tenth project | Using - Module - FetchAPI - Async Await - Class - Arrow Function 

**Look project**(https://g4brieljs.github.io/API-Events/)

![module](https://github.com/g4brieljs/Course-Javascript/blob/master/26-Project-ModuleES6/module.png)