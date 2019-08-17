// Class 
// los contructores se pasan en la palabra reservada, o commands

class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimriSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }


    // Otros tipos de atributos llamados estaticos, tiene la ventaja que no ocupan instanciarse no es necesario que agregues New Cliente
    static bienvenida(){
        return `Bienvenido al cajero Cliente`;
    }

}

const cliente = new Cliente('Pedro', 1240);
console.log(cliente.imprimriSaldo());

//to esto es indendiente de Cliente, porque podemos crear clientes
// para heredar atributos utilizamos la palabra extends

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        // se usa super para asignar los atributos de la clase principal, esto va al constructor padre y los asignas a nombre y a saldo
        //va hacia el constructor padre
        super(nombre, saldo);
        // no existe en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    //Si queremos reescrbir un metodo, debemos llamarlo igual
    static bienvenida(){
        return `Bienvenido al cajero para empresas`;
    }

}

const empresa = new Empresa('Empresa', 1000, 21024, 'Construccion');
console.log(empresa.imprimriSaldo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());


// crear clases en EcmaScript6 es más legible y claro que en EcmaScript 5