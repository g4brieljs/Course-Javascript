// Cotizador de seguro de Auto
/* 
1-Existen 3 modelos, cada uno con precios distintos.
2-Cada año del auto su precio deberá ser menor en un 3% 
3-El seguro del Auto Completo o básico tienen distintos precios
4-Deberá ser realizado con Prototypes y migrado a Classes
*/

// Cotizador constructor

// siempre que colecciones el boton vamos a recolecat los datos del form
// Constructor para Seguro, este leera los datos del form
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
// ya hemos creado nuestro primer constructor
}

Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    // En seguro real puede variar
    // Colocar una base, se va a multiplicar por el valor de cada seguro, const * americano
    let cantidad;
    const base = 2000;

    switch(this.marca){
        
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;  
    }

    // Vamos cotizar el año
    // En vez de leer un switch, vamos a tomar la diferncia entre la fecha acutal y el año en que estamos
    const diferencia = new Date().getFullYear() - this.year;
    // cada año de diferencia hay que reducir su valor un 3%
    cantidad -= ((diferencia * 3) * cantidad / 100)

    //Ahora el tipo del seguro, si es básico se multiplica por 30% más
    // Si es completo 50% más

    if(this.tipo === 'basico'){
         cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
    // console.log(cantidad);

}

// El otro constructor mostrara la interfaz de usuario, mostrar los resultados
function Interfaz(){
    //inicializa vacio, pero se cargara del prototype
}

//Mensaje que se imprime en el HTML || Podemos reutilizar mensaje
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo){
    const div = document.createElement('div');

    // ahora vamos a crear una clase dependiendo tl tipo de error
    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }

    //insertando html sin importar que tipo de error sea
    div.innerHTML = `${mensaje}`;
    // insertando el form || insertBefore, toma dos parametros, el primero que quieres insertar, y el 2do es antes de lo que quieres insertar
    formulario.insertBefore(div, document.querySelector('.form-group'));
    // desaraprece el mensaje al pasar 3s
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    }, 3000);
}

// Este prototype imprimirá el resultado de la aplicacion
Interfaz.prototype.mostrarResultado = function(seguro, total){
    const resultado = document.getElementById('resultado');

    let marca;
    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }

    // Creando nuestro div
    const div = document.createElement('div');
    // Mostrando informacion
    div.innerHTML = `
        <p class="header">Tu resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.year}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total a pagar: $${total}</p>
    `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);

    
    console.log(marca);
}

// En las clases son la van los datos
// Event Listener

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault; //para que no envie el form por el actio

    // leer la marca seleccionada del select, manda el value
    // Ahora vamos a acceder a los datos del form, el option 
    const marca = document.getElementById('marca');
    // asi accedemos a los datos de un select, a sus option
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    // leer el año del select <select> EcmaScript6 no acepta ñ
    const year = document.getElementById('year');
    const yearSeleccionado = year.options[year.selectedIndex].value;
    //Nos mostrara el year que seleccionemo de la lista
    
    // leer el valor del radius button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear una instancia de Interfaz
    const interfaz = new Interfaz();

    // Revisar que los campos no esten vacios, por lo menos el de Marca
    if(marcaSeleccionada === '' || yearSeleccionado === '' || tipo === ''){
        // interfaz imprimiendo un error
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    }else{
        // Limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
            if(resultados != null){
                resultados.remove();
            }

        // Instanciar seguro y mostrar interfaz 
        const seguro = new Seguro(marcaSeleccionada, yearSeleccionado, tipo);
        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        // Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        // Cargando la cotizacion
        interfaz.mostrarMensaje('Cotizando...', 'correcto');
    }

    //  siempre probar para ver si funciona antes de seguir escribiendo codigo
    // console.log(tipo);
    // console.log(yearSeleccionado);
    // console.log(marcaSeleccionada);
    console.log('Presionado');
});

// vamos a agregar el form de los 20 años con puro javascript

const max = new Date().getFullYear(),
      min = max - 20;
// el máximo será el año actual, por politicas de la empresa solo serán 20 años

const selectYear = document.getElementById('year');

for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYear.appendChild(option);
}