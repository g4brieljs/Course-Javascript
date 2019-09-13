const restauranApp = {};
restauranApp.platillos = [
    {
        platillo: 'Pan',
        precio: 20,
    },
    {
        platillo: 'Lasaña',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 30,
    }
]

// functions

restauranApp.funciones = {
    ordenar: id => {
        console.log(
            `Tu platillo: ${restauranApp.platillos[id].platillo} se esta preparando.`
            );
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restauranApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido al menu: `);
        platillos.forEach( (platillo, index)  => {
            console.log(`${index}: ${platillo.platillo} $ ${platillo.precio}`);
        });
    }
}

// console.log(restauranApp); 

// aplicamos DEstructuring  
const {platillos} = restauranApp;
restauranApp.funciones.mostrarMenu(platillos);
// Oredenamos
restauranApp.funciones.ordenar(2);

restauranApp.funciones.agregarPlatillo('Pastel', 15);
restauranApp.funciones.mostrarMenu(platillos);


// La idea del namspace es que no tengas globales, que no puedas a acceder a ellos y eviten las colisiones con otros tipos de objetos.

// Si usamos librerias podrían chocar los nombres, y con NAMESPACE evita esto.