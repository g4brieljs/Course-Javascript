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