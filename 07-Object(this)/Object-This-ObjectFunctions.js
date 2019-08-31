// Object literal

const cliente = {
    nombre: 'Juan',
    saldo: 200,

    // una funcion adentro de un objeto se le conoce como un método
    tipoCliente : function(){
        let tipo;

        // Con this podemos acceder al atributo del objeto
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente()); 
//Para acceder al contenido del objeto, debemos utilizar los puntos, ejemplo: .nombre 

// Método alternativo
// ventjas poder crear varios objetos

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    this.tipoCliente = function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinium';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 1500);
const persona2 = new Cliente('Juana', 600);

console.log(persona);
console.log(persona2);   