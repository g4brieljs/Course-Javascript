//Crear un arreglo

const meses = new Array('Enero', 'Febrero');
 
//Acceder al Index del Arrays (Recuerda, los arreglos comienzan en 0)
console.log(meses[1]);

//Agregar meses al arreglo
meses.push('Marzo'); 

//Esto se usa por ejemplo, si tenemos un carrito de compras y queremos aplicarle a un elemento del carrito un descuento, aplicarselo al elemento.
console.log(meses.indexOf('Enero')); //Dice en que lugar esta el elemento

//añade elementos al principio del arreglo
meses.unshift('Mes 0'); 

// Delete element of array (the first)
meses.shift();//Elminó el mes 0

// Quitar un rango | El primer parametro indica qué rango eliminar, y el segundo la cantidad a partir del mismo rango, ejem 1 es el mismo, 2 será él mismo y el siguiente.
meses.splice(1,1);//elminó Febrero

// Revertir Arrays
meses.reverse();

console.log(meses);

console.log(Array.isArray(meses)); // Validar arrays

// Unir varios arrays

let array1 = [1,2,3],
    array2 = [4,5,6];

console.log(array1.concat(array2));

// Ordenar arreglos
const frutas =['Naranja', 'cereza', 'sandías', 'zanahoria', 'aguacate'];

frutas.sort();
console.log(frutas);

// ordernar numeros
array1 = [3,9,91,29,93,49,21];
//Esta funcion permite organizarlos de mayor a menor, si quieres lo opuesto puedes invertir los parametros.
array1.sort(function(x,y){
    return x - y;
});
console.log(array1);





