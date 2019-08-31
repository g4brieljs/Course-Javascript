// Nueva forma de crear un objeto

const Cliente = {
    // aqui ponemos nusstros proto
    imprimirSaldo: function(){
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

//Crear el objeto
const mary = Object.create(Cliente);

// Para añadirles datos
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(30);

//En la consola podremos ver nuestros 2 protoype para utilizarlos
console.log(mary.imprimirSaldo());