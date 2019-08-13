//  Variables

const cursos = document.getElementById('lista-cursos');
const carrito = document.getElementById('carrito');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarBtn = document.getElementById('vaciar-carrito');

// Listeners

cargarEventListener();

function cargarEventListener(){

    // Cuando se presiona el boton agregar carrito
    cursos.addEventListener('click', comprarCurso);

    // Cuando se elimine un curso 
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito 
    vaciarCarBtn.addEventListener('click', vaciarCarrito);

    // Cargar los productos en Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

}  


// Functions

function comprarCurso(e){
    e.preventDefault();

    // Delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;

        // Enviamos los daots del curso
        leerDatosCursos(curso);
    }
}

// Leer datos del curso
function leerDatosCursos(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src, 
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    // Alertamos que ha agregado el carrito 
    alert('Has agregado el curso ' + infoCurso.titulo);

    insertarCarrito(infoCurso);
    // console.log(infoCurso);
}

//Muestra el curso selecciona en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML =` 

        <td>
            <img src="${curso.imagen}" width="160px"/>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>

    `;

    listaCursos.appendChild(row);

    guardarCursoLocalStorage(curso);
}


// Eliminar cursos del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();

    let curso, cursoID;

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();

        curso = e.target.parentElement.parentElement;
        cursoID =curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLocalStorage(cursoID);
}

// vaciar carrito 

function vaciarCarrito(){
    //Forma lenta innerHTML
    // listaCursos.innerHTML = '';
    //Forma rapida while
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Vaciar del local Storage todas
    vaciarLocalStorage();

    return false;   

}

//Almacenar los cursos del carrito al Local Sotorage

function guardarCursoLocalStorage(curso){
    let cursos;

    // toma el valor de un arreglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();

    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage(){

    let cursosLS;

    // comprobamos si hay algo en LS
    if(localStorage.getItem('cursos') === null){
        cursosLS = [];
    }else {
        cursosLS = JSON.parse( localStorage.getItem('cursos'));
    }

    return cursosLS;

}

//imprimir los productos en el carrito

function leerLocalStorage(){
  let cursosLS;
  
  cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso){
        const row = document.createElement('tr');
    row.innerHTML =` 

        <td>
            <img src="${curso.imagen}" width="160px"/>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>

        `;

        listaCursos.appendChild(row);

    });
};

// Eliminar productos del local Storage

function eliminarCursoLocalStorage(curso){
    let cursosLS;
    
    //Obtenenos el arreglo delcurso
    cursosLS = obtenerCursosLocalStorage();
    //iteramos comparando el ID de los productos borrandolos del Local Storage
    cursosLS.forEach(function(cursoLS, index){
        if(cursoLS.id === curso){
            cursosLS.splice(index, 1);
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

// Vaciar todos los productos del Local Storage

function vaciarLocalStorage(){
    localStorage.clear();
}