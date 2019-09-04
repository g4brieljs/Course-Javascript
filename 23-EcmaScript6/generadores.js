// Los generadores son funciones que retornan iteradores, se indican con * despues de la palabra funtion

function *crearGenerador(){
    // usas la palabra yield
    yield 1;
    yield 'Nombre';
    yield 3 + 3;
}

const iterador = crearGenerador();

console.log(iterador.next().value);


// Genrador que itera un ARRAY

function *nuevoGenerador(carrito){
    for(i=0;i<carrito.length;i++){
        yield carrito[i];
    }
}
// Creamos el carrito
const carrito = ['p1', 'p2', 'p3', 'p4'];

// recorremos el iterador
let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next().value);
console.log(iterador2.next().done);