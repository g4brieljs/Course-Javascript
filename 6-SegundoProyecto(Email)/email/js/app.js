// Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// Event listener

eventListeners();

function eventListeners(){
    //Cuando inicie la aplicacion\
    document.addEventListener('DOMContendLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}

// Functions

function inicioApp(){
    // Deshabilitar el envio cuando cargue la página

    btnEnviar.disable = true;
}


// Para valir que haya algo escrito

function validarCampo(){
    
    // Validar la longitu del texto y que no este vacío
    validarLongitud(this);

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.lenght ===0){
            btnEnviar.disable = false;
        }
    }
}

function validarLongitud(campo){
    console.log(campo.value.lenght);

    if(campo.value.lenght > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}