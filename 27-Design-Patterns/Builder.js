// vamos a instanciar Formulario, y agregaremos campos dentro del constructor
class Formulario{
    constructor(){
        this.campos = []
    }

    // Como es un BUILDER vamos a crear un nuevo para ir agregando los nuevos Inputs
    // El builder toma un tipo 
    agregarCampo(tipo, texto){
        let campos = this.campos;

        let campo;

        // Esta parte parecida la Factory
        switch(tipo){
            case "text":
                campo = new InputText(texto);
                break;

            case "email":
                    campo = new InputEmail(texto);
                break;

            case "submit":
                    campo = new Boton(texto);
                break;

            default:
                throw new Error("Tipo no valido"  + tipo);
        }

        campos.push(campo);
    }

    // Este metodo nos permitira traer una instancia del form, con los campos
    obtenerFormulario(){
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;
        
        for(let i = 0; i < campos; i++){
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }

        return form;
    }   

}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }

}

// Nuestras clases que crean los inputs del formulario

// Esta clase crea los inputs tipo text
class InputText extends Inputs {
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

// Esta clase crea los inputs tipo email
class InputEmail extends Inputs {
    constructor(texto){
        super(texto);
    }
    
    // Metodo que crea el elemento
    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        // aqui agregamos un placeholder, con los datos del texto que agregue el usuario
        inputEmail.setAttribute('placeholder', this.texto);
        // retornamos nuestro input
        return inputEmail;
    }
}

// Esta clase crea Botones
class Boton extends Inputs {
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const boton = document.createElement('button');
        boton.setAttribute('type', 'submit');
        boton.textContent = this.texto;
        return boton;
    }
}


// instanciamos Formulario

const formulario = new Formulario();
formulario.agregarCampo('text', 'Agrega tu nombre');
formulario.agregarCampo('text', 'Agrega tu apellido');
formulario.agregarCampo('email', 'Agrega tu correo');
formulario.agregarCampo('submit', 'Enviar');


// renderizar en el HTML

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#app').appendChild(formulario.obtenerFormulario())
});

