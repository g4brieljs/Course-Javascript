// Symbols

const first = Symbol();
const second = Symbol('Descriptio');

// Cada Symbol se genrea difirente al otro
// Cada Symbol tiene sus propios valores
// Un Symbol, agregando un valo, le da una propiedad privada 

let name = Symbol();

// Crear persona
let person = {}
person.name = 'Steven';

// si quieres agregar un symbol aun objeto, entre corchets para que se agrege al symbol
person[name] = 'Gabriel';

// acceder al valor del Symbol
console.log(person[name]);