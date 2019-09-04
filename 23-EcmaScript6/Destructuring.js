// Destructuring 

const cliente1 = {
    nombre: 'Alejandra',
    tipo: 'Premium',
    sal: 2,
    datos : {
        ubicacion: {
            ciudad: 'Santo Domingo',
            pais: 'Republica Dominicana'

        },
        cuenta: {
            desde: 01
        }
    }
}

// manera antigua
// let nombre = cliente.nombre,
//     tipo = cliente.tipo;

// Destructuring

let {datos: {ubicacion}} = cliente1;



// Destructuring a los arrays

const ciudades = ['Londres', 'New York', { idioma: 'ingles'}];

const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

const [ , ciudad] = ciudades;

// console.log(ciudad);


// Ejemplo avanzado

const cliente2 = {
    tipo: 'Premium',
    salgo: 3000,
    datos : {
        nombre: 'Gabriel',
        apellido: 'Jimenez',
        residencia: {
            ciudad: 'Santo Domingo'
        }
    },
    movimientos: ['12', '13', '14']
}

let{
    tipo,
    datos: {residencia},
    movimientos : [ , , tres]
} = cliente2;

// console.log(tres);

// Destructuring a funciones

function reservacion(completo,
    {
        metodo = 'efectivo',
        dia = 0
    } = {}
    ) 
    
    {
    
        if(completo){
            console.log('proceder a completar');
        }else{
            console.log('NO proceder')
        }
    console.log(metodo);
    console.log(dia);

}

reservacion(
    true,
    {
        metodo: 'tarjeta',
        dia: 5
    }
);