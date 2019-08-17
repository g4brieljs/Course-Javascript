// Class 
// los contructores se pasan en la palabra reservada, o commands

class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimriSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    tipoCliente(){
        let tipo;
        if(this.saldo > 10000){
            tipo = 'Gold';
        }else if(this.saldo > 5000){
            tipo = 'Platino';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }


    // Otros tipos de atributos llamados estaticos, tiene la ventaja que no ocupan instanciarse no es necesario que agregues New Cliente
    static bienvenida(){
        return `Bienvenido al cajero`;s
    }

}

// imprimiendo el metodo estatico | No tuvimos que crear un nuevo cliente, si solo deseas acceder a una propiedad, puedes usar esto
console.log(Cliente.bienvenida());

const maria = new Cliente('Maria', 'Perez', 10000);

maria.retirarSaldo(500);

console.log(maria.imprimriSaldo() + " y eres un cliente " + maria.tipoCliente());

// crear clases en EcmaScript6 es más legible y claro que en EcmaScript 5