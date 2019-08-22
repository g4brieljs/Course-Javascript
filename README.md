# Course of Javascript Complete from zero the to build app with React and Nodejs
**Summary Of course:**

First learned Fundamentals of Javascript, and later Events, funcitions, and Local Storage.

# Projects with Local Storage and Event Delegation

# First Project

In this first project i builded a litte app what it allows add new tweet and the front-end, the first concept so you understan better, i create my const selecting the place for print the new Tweet.

**You can add the Local Storage:**

  `localStorage.setItem('tweets', JSON.stringify(tweets)); `


![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/4-LolcalStorage(Twitter)/Twitter/tweet.png)

# Second Project

![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/5-PrimerProyecto(Carrito)/carrito/Carshop.png)

# Third project

![Local Storage](https://github.com/g4brieljs/curso-javascript/blob/master/6-SegundoProyecto(Email)/email/Email.png)

# Projects With EcmaScritp 6

# Class in Javascript 

```
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

![carsecure](https://github.com/g4brieljs/Course-Javascript/blob/master/9-cotizaSeguro/cotizador-coches.png)

# Fiveth project | Class in Javscript and constructor

![gastos](https://github.com/g4brieljs/Course-Javascript/blob/master/10-GastoSemanal-Class/gasto-semanal.png)

# AJAX in Javascript 

```
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

```
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

# Now i'am building my personal project 

Coming soon!
