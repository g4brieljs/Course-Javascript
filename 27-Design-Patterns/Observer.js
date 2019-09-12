// Suscriptor publicador

// un objeto
let observer = {
    // obtener ofertas
    obtenerOfertas: function(callback){
        // para validar que lo que estemos pasando como callback sea una function
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
    },  
    // toma las personas que se quieren quitar de las ofertas
    cancelarOfertas: function(callback){
        for(let i = 0; i < this.subscribers.length; i++){
            if(this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    // publicar ofertas
    publicarOferta: function(oferta){
        for(let i = 0; i < this.subscribers.length; i++){
            if(typeof this.subscribers[i] === "function"){
                // esto nos permitirar suscribir a los que sucribieron a la oferta
                this.subscribers[i](oferta);
            }
        }
    },
    // personas que venden
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }    
}

// Creando vendedores

const udemy = {
    // quieren vender un nuevo curso
    nuevoCurso: function(){
        const curso = 'New course of Javascript';
        // publicar oferta del curso
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const ofeta = 'Compra un celular';
        this.publicarOferta(ofeta);
    }
}

// crear los publicadores
// lo agrega como un publicador
observer.crear(udemy);
observer.crear(facebook);

// Creando dos personas

const Gabriel = {
    compartir: function(oferta){
        console.log('Me interesa la oferta de ' + oferta);
    }
}

const Juana = {
    interesa: function(oferta){
        console.log('Me interesa la oferta de ' + oferta);
    }
}

// subscribiendo a Juana a Udemy
udemy.obtenerOfertas(Juana.interesa);
// tenemos que crear una nueva oferta
udemy.nuevoCurso();
// Cancelar ofertas
// toma un callback
// revisa quienes estan suscritas, y si ya lo esta los elimina
udemy.cancelarOfertas(Juana.interesa);
udemy.nuevoCurso();

/* 


    1. Creamos el observador con los metodos que necesitamos
    2. Luego creamos la informacion de los publicadores
    3. Luego lo agregamos al observer


*/


facebook.obtenerOfertas(Gabriel.compartir);
facebook.nuevoAnuncio();

// De esta manera puedes tener muchos publicadores, y suscriptores, que estaran recibiendo notificaciones