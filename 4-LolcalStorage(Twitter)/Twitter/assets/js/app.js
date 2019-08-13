// vars

const listaTweets = document.getElementById('lista-tweets');

// Events

eventListeners();

function eventListeners(){
    //Al enviar el form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Elimnar los Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Agregar del local Storage al DOM
    document.addEventListener('DOMContentLoaded', localStorageListo);
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

    // Add tweet al Local Storage
    addTweetLocalStorage(tweet);
}

// Function para Borrar los Tweets 

function borrarTweet(e){
    e.preventDefault();

    //classList te regresa todas las class y className solo te devuelve 1 class
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        alert("Eliminaste el Tweet");
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }

}


//mostrar datos del localStorage en la lista
function localStorageListo(){
    let tweets;
    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
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
    });
}

// Add Tweet al Local Storage
function addTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // a'ador el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisar los valores del LS
    if (localStorage.getItem('tweets') === null){
        tweets = [];
    }else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}


//Eliminar tweet Del Local Storage

function borrarTweetLocalStorage(tweet){

    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0, tweet.length - 1); // substring permite eliminar una porcion del texto

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets));
}