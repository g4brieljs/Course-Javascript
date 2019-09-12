const alumnos = {
    // todos los alumnos
    listaAlumnos : [],

    // obtener un alumno
    // Aqui podremos llamra los alumnos por su id, si nada mas queremos el alumno 3 lo llamamos por su id
    get: function(id){
        // console.log(id);
        return this.listaAlumnos[id];
    },

    // crear alumno
    // Una vez crear tiene los datos de los alumnos los manda a listaAlumnos, con el metedoo push
    crear: function(datos){ 
        this.listaAlumnos.push(datos);

        return datos;

    },

    // lista todos 
    // aqui se van enlistando los datos
    listado: function(){
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Gabriel',
    Eddad: 19
}

const infoAlumno2 = {
    nombre: 'Yetto',
    edad: 19
}

// Aqui creamos los alumnos, mandamos los datos al constructor crear
alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

// el listado de todos los alumnos
const listado = alumnos.listado();

console.log(listado);


// te regresa el alumno
const alumno = alumnos.get(1);

console.log(alumno);