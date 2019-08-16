// prototipos ya no se usan en ECMASCRIPT 6, pero no esta mal aprender que son
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creando un prototype
Cliente.prototype.tipoCliente = function(edad){
    let tipo;

        // Con this podemos acceder al atributo del objeto
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal';
        }

        return tipo;
}
// primero el nombre de la clase, luego proto, luego el nombre del metodo, que se pueden ver en el console.log, como valueOf

const cliente1 = new Cliente('Pedro', 100);
console.log(cliente1);

// 3 razones para usar un prototype 1-para no cargar tanto las funciones 2-crear prototipos te permite mas organizacion 3-si creas muchas funciones, esas funciones se puede usar en cualqier otra funciones, y con esto permites que esta funcion solo funcione en el codigo