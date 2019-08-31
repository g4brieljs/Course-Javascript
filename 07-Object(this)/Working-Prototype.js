// prototipos ya no se usan en ECMASCRIPT 6, pero no esta mal aprender que son
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// primero el nombre de la clase, luego prototype, luego el nombre del metodo, que se pueden ver en el console.log, como valueOf

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

// Prototipo que imprime saldo y nombre
//Vamos a tener acceso al nombre y al saldo, ya que pertenecen al mismo tipo de objeto, y van a esta disponible en esta instancia de Pedro, y 100
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo del cliente ${this.tipoCliente()}`;
}

// Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
}


//Instancias 
const cliente1 = new Cliente('Pedro', 100);
const cliente2 = new Cliente('Juana', 2500);
const cliente3 = new Cliente('Gabriel', 50);

//No se le rebajan a los demas, gracias a los obejetos tenemos instancias diferentes.

//Ahora vamos a retirarle 500 pesos a Juana con nuestro nuevo Prototype

cliente2.retirarSaldo(500);

// Output 2000 en vez de 2500.

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());

// 3 razones para usar un prototype 1-para no cargar tanto las funciones 2-crear prototipos te permite mas organizacion 3-si creas muchas funciones, esas funciones se puede usar en cualqier otra funciones, y con esto permites que esta funcion solo funcione en el codigo