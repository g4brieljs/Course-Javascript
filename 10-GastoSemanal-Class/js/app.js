// Vars

const presupuestoUsuario = prompt('¿Cuánto es tu presupuesto?');

// Variable para poder acceder a ella en todo momento
let cantidadPresupuesto;

//  Variable para seleccionar el Form de agregar-gasto

const formulario = document.getElementById('agregar-gasto');

// ######### CLASS ##########   

class Presupuesto{
    constructor(presupuesto){
        // cambiamos de string a int
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // Method para ir restando al prespuesto actual
    // Siempre que agregues un gasto se ejecutara este metodo
    // Lo dejaremos con su Default, por si no se ha añadido un gasto
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

// Class para la Interfaz, esta manejara todo lo relacionado con HTML
// Siempre escibre tus classes con Mayúsculas, buenas practicas

class Interfaz{
    insertarPresupuesto(cantidad){
        // Imprimiendo el total
        const totalSpan = document.querySelector('#total');
        totalSpan.innerHTML = `${cantidad}`;

        // Imprimiendo el restante
        const restanteSpan = document.querySelector('#restante');
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        // con boostrap le asignaremos una clase
        divMensaje.classList.add('text-center', 'alert');
        
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        // insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar el alert despues de un tiempo
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }

    // agrega los gasto de la lista
    agregarGastoListado(nombre, cantidad){
        const gastosListado = document.querySelector('#gastos ul');

        // crear el LI
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // insertar el gasto
        li.innerHTML = `
            ${nombre}
           <span class="badge badge-primary badge-pill"> ${cantidad}</span>

        `;

        // insertar al HTML
        gastosListado.appendChild(li);
    }
    
    // comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        // leemos el prespuesto restante 
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        
        // insertandolo en el HTML
        restante.innerHTML = `${presupuestoRestanteUsuario}`;

        this.comprobarPresupuesto();
    }

    // Cambia el color del Restante 
    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // comprobar el 25% del gasto
        if((presupuestoTotal / 4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
            console.log('Tienes el 25%');
        }else if((presupuestoTotal / 2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
            console.log('Tienes el 50%');
        }
    }
}


// ######### Event Listener ##########   

document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        // Vamos instanciar class presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        // Vamos a instanciar la classe interfaz
        const ui = new Interfaz(cantidadPresupuesto.presupuesto);
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
        // console.log(ui);
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Leer del form de gasto
    const nombreGasto =document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    
    // Instanciar la interfaz
    const ui = new Interfaz();

    // comprobar que los campos no este vacios
    if(nombreGasto === '' || cantidadGasto === ''){
        // 2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        ui.imprimirMensaje('Se agrego el gasto', 'correcto');
        // insertar en el HTML
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        // prespuesto restante
        ui.presupuestoRestante(cantidadGasto);
    }
})