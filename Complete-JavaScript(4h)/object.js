// Create Obeject in Javascript

const users = {
    nombre: 'Gabriel',
    apellido: 'Jiménez',
    profesión: 'Ing. Cyber Security',
    email: 'info@g4brieljs.com',
    age: 19,
    hobbys: ['Learning how to make website', 'Learning about Cyber Security', 'Read books', 'To make exercise'],
    address: {
        city: 'Santo domingo',
        country: 'Domincan Republic'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.age;
    }
}


console.log(users.address.country);
console.log(users.nacimiento());