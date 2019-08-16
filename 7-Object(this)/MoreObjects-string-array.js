// string
// puedes crear string con los constructores
const nombre1 = 'Juan';
// new crea una nueva instancia - un nuevo objeto
const nombre2 = new String('Pedro');

console.log(typeof nombre1);
console.log(typeof nombre2);

//Numbers

const numero1 = 1;
const numero2 = new Number(2);

// Boolean

const boolean1 = true;
const boolean2 = new Boolean(false);


// Functions

const function1 = function(a,b){
    return a + b;
}

const function2 = new Function('a', 'b', 'return a + b');

//objects

const persona1 = {
    nombre: 'Pedro'
}

const persona2 = new Object({nombre: 'Juan'});

//Arrays 
const arreglo1 = [1,2,3,4];

const arreglo2 = new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2); // Te muestran todas sus propediades, y parametros que se le puede pasar a los arreglos

// al crear un objeto con new, podemos ver que tenemos acceso al proto