// Comprobar el valor de una variable:

let puntaje;

if(typeof puntaje != 'undefined'){
    console.log(`El puntaje fue de ${puntaje}`);
}else{
    console.log(`No hay puntaje`);
}


// Ejemplo Carrito de compra - Pagos>

let efectivo = 500,
    credito = 300;
    disponible = efectivo + credito;
    totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito){
    console.log('Puede pagar');
}else if(totalCarrito < disponible){
    console.log('Falta con ambos');
}else{
    console.log('No puede pagar');
}

// Ternary

const logueado = true;

console.log( logueado === true ? 'Si se logueo' : 'No se ha logueado' );

// un if else en una sola línea