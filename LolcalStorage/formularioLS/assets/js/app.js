// vars

const listaTweets = document.getElementById('lista-tweets');

// Events

eventListeners();

function eventListeners(){
    //Al enviar el form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

//functions


//Agregando tweet al form

function agregarTweet(e){
    e.preventDefault(); //Evitar que filtre todas sus propiedades

    const tweet = document.getElementById('tweet').value;

    //crear boton de eleminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //crear el elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // add boton delete of tweet
    li.appendChild(botonBorrar);
    // add tweet a the list
    listaTweets.appendChild(li);

    console.log(tweet);
}