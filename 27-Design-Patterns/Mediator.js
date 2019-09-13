// object constructor y prototype

const Vendedor = function(nombre){
    this.nombre = nombre;
    // aun no sabemos en que sala estan
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
}

// Simular un pequeño sistema de subastas

Vendedor.prototype = {
    // vamos a usar 2 funciones que estaran atadas a este tipoe de objeto
    // poder publicar oferta
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo} , iniciamos en $${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} ("sonido de mazo")`)
    }
}

// SEgundo prototype

Comprador.prototype = {
    oferta: function(mensaje, comprador){ 
        // acedemos al nombre, como es un objeto, usamos el .
       console.log(`${comprador.nombre}: ${mensaje} `);
    }
}

const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            // para que el objeto sea global debemos mandarlo en el return
            // console.log(compradores);
        }
    }
}


// Instanciar los objetos

const Gabriel = new Comprador('Gabriel');
const Pedrito = new Comprador('Pedrito');
const Juana = new Comprador('Juana');

// Nuevo vendedor

const vendedor = new Vendedor('Vendedor');

// Instanciar subasta

const subasta = new Subasta();

// El null si toma parametros

subasta.registrar(Gabriel);

// Crear oferta
vendedor.oferta('Laptop', 3000);


Gabriel.oferta(3500, Gabriel);

Juana.oferta(2000, Juana);

// Se vende el articulo
vendedor.vendido(Gabriel.nombre);