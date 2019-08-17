// Como podemos ver tenemos nuestro objeto cliente, y nuestros prototipos los hemos añadidos de cliente, si necesitamos crear otro, debemos heredar del protitpo antiguo, esto permite un código más fácil de mantener

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototipo que imprime saldo y nombre
//Vamos a tener acceso al nombre y al saldo, ya que pertenecen al mismo tipo de objeto, y van a esta disponible en esta instancia de Pedro, y 100
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}}`;
}

//Este prototype no esta siendo heredado en nuestro nuevo objeto, ahora vamos a heredarlo

//Instancias 
const cliente1 = new Cliente('Pedro', 100);

console.log(cliente1.nombreClienteSaldo());

// Banca para empresas, creando otro function
// Esto primero toma 4 argumentos en su constructor, 1-nombre como el cliente, 2-saldo, 3-telefono, 4-tipo de empresa
function Empresa(nombre, saldo, telefono, tipo){
    //podriamos hacerlo de esta manera, como podemos heredar los datos del otro objeto, si fueran muchos datos, sería insostenible, heredandolos sería más práctico, que por ejemplo si a la clase principal le cambiamos datos al atributo, se heredan en sus hijos
    // this.nombre = nombre;

    // Así se heredan, llamamos el ooobjeto, y luego pasamos los argumentos
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

// cON ESTO VAMOS A HEREDAR el prototype a nuestro nuevo objeto>>, y luego se crea la instancia

Empresa.prototype = Object.create(Cliente.prototype);

// Nueva instancia para una nueva empresa

const empresa = new Empresa('Udemy', '100000', '801230', 'Educacion');

console.log(empresa.nombreClienteSaldo());

// 3 razones para usar un prototype 1-para no cargar tanto las funciones 2-crear prototipos te permite mas organizacion 3-si creas muchas funciones, esas funciones se puede usar en cualqier otra funciones, y con esto permites que esta funcion solo funcione en el codigo

// Ya es mejor usar clases, pero es bueno conocer que son los prototypes