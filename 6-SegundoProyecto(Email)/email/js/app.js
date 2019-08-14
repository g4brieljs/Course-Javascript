// Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');

// Event listener

eventListeners();

function eventListeners(){
    //Cuando inicie la aplicacion\
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton de enviar
    formularioEnviar.addEventListener('submit', enviarEmail);
}

// Functions

function inicioApp(){
    // Deshabilitar el envio cuando cargue la página

    btnEnviar.disabled = true;
}


// Para valir que haya algo escrito

function validarCampo(){
    
    // Validar la longitu del texto y que no este vacío
    validarLongitud(this);

    // Validar el Email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');


    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

// Cuando se envia el correo
function enviarEmail(e){
    // Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar Spinner y mostrar GIf de enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 4000);
    },3000);

    e.preventDefault();

    

}

// Con esta funcion podemos validar la longitud de los input y saber si tiene letra o no

function validarLongitud(campo){
    console.log(campo.value.length);

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// Vamos a validar que es un email

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}