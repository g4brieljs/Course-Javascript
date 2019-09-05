let valor, expReg;

expReg = /[0-9]/;

valor = 1992;

console.log(expReg.test(valor));

// Una expresion regular te permitira evaluar si un valor cumple los datos que deseas, por ejemplo aqui buscamos numeros

// Puedes validar emails, inputs, etc

// Validar una fecha

expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2000';

console.log(expReg.test(valor));

// Para negar datos, para aceptar todo lo contrario a lo que le pidas

expReg = /[^0-9]/;
valor = 12;

console.log(expReg.test(valor));

// para determinar la cantidad de caracteres

expReg = /\d{1,2}-\d{1,2}-\d{4}/
valor = '123-123-1345'; // false
valor = '10-1-2019'; //true

// como evaluar letras o numeros
expRR   = /\w+/;
valor = 'The zone is pefect'; // true
valor = 1234; // true
valor = ''; // false

// + para evaluar mas alla de esos digitos
// w es para revisar que lo que este escrito sea solo numeros o letrass

// Revisar que solo sean numeros
expReg = /([0-9])\w+/;
expReg = /\d+/;


// revisar que solo sean mayusculas
expReg = /([A-Z])\w+/;



// Si estas elaborando un sistema de reservaciones, puede haber datos que las fechas vayan con 1 digito 2, o hasta 4, esto ter permitirá 