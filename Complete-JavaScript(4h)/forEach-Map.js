// forEach // recorrer un arreglo
const carrito1 = ['p1', 'p2', 'p3', 'p4'];

//forEach

carrito1.forEach(function(productos, index){
    console.log(`${index} : ${productos}`);
});
console.log("## Recorriendo un arreglo ##\n##################")
// forMap //Recorrer objetos

const carrito2 = [
    {id: 1, producto: 'libro'},
    {id: 1, producto: 'libro'},
    {id: 1, producto: 'libro'}
]


const nombreProducto = carrito2.map(function(carrito2){
    return carrito2.producto;
})

console.log(carrito2);

console.log("## Recorriendo un objeto ##\n##################")


// for in 

const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    año: 1922,
    marca: 'Carro'
}

for ( let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`)
}

console.log(automovil);