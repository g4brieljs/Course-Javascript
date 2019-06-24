// String to Number

const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

console.log(parseInt(numero1) + numero2);
console.log(Number(numero1));

// parseIntFloat y ParseInt (this method is for convert strings a numbers)

let dato;

dato = parseFloat('100');

// toFixed (This method is for to reduce decimal numbers)

dato = '12312.15412';

console.log(parseFloat(dato).toFixed(2));

