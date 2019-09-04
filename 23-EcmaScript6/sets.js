let car = new Set(1,2,3,1,2,3);
console.log(car);
output: 1,2,3.

//Saber si hay algun elemento

console.log(car.has(2));

// Eliminar algun elmento

car.delete(3);

// Borrar totalmente

car.clear();


// Iterandolos

car.forEach((producto) =>{
    consolelog(producto);
})