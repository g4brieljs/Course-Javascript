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
function seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
// ya hemos creado nuestro primer constructor
}

// El otro constructor mostrara la interfaz de usuario, mostrar los resultados
function Interfaz(){
    //inicializa vacio, pero se cargara del prototype
}

//Mensaje que se imprime en el HTML || Podemos reutilizar mensaje
Interfaz.prototype.mostrarError = function(mensaje, tipo){
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

// En las clases son la van los datos
// Event Listener

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault; //para que no envie el form por el actio

    // leer la marca seleccionada del select, manda el value
    // Ahora vamos a acceder a los datos del form, el option 
    const marca = document.getElementById('marca');
    // asi accedemos a los datos de un select, a sus option
    const marcaSelccionada = marca.options[marca.selectedIndex].value;
    
    // leer el año del select <select> EcmaScript6 no acepta ñ
    const year = document.getElementById('year');
    const yearSeleccionado = year.options[year.selectedIndex].value;
    //Nos mostrara el year que seleccionemo de la lista
    
    // leer el valor del radius button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear una instancia de Interfaz
    const interfaz = new Interfaz();

    // Revisar que los campos no esten vacios, por lo menos el de Marca
    if(marcaSelccionada === '' || yearSeleccionado === '' || tipo === ''){
        // interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    }else{
        // Instanciar seguro y mostrar interfaz 
        console.log('Todo correcto');
    }

    //  siempre probar para ver si funciona antes de seguir escribiendo codigo
    console.log(tipo);
    console.log(yearSeleccionado);
    console.log(marcaSelccionada);
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