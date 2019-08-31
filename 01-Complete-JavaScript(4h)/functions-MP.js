// Functions Métodos de propiedad
// cuando una funcioón se pone dentro de un objeto

const music = {
    reproducir: function(id){
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function(){
        console.log(`Pausar`);
    }
}

// The methods también pueden guardarse | crearse fuera del objeto:
music.borrar = function(id){
    console.log(`Borrando la cancion con el ID ${ID}`);
}

music.reproducir(30);
music.pausar();
music.borrar(2);