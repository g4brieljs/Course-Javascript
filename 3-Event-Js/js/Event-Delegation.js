// Event Delegation

document.body.addEventListener('click', eliminarElemento);

//function

function eliminarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){        
    console.log(e.target.parentElement.parentElement.remove() );
    }

    if(e.target.classList.contains('agregar-curso')){
        console.log('Curso agregado');
    }
}


// Delegation