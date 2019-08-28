// Callbacks
// Son funciones que corren dentro de otra funciones

const citys = ['Santo Domingo', 'Santiago', 'Madrid'];

// Inline callback
// is more recommend
citys.forEach(function(city){
    console.log(city);
})

// With function define
function showCity(city){
    console.log(city);
}

citys.forEach(showCity);


// Where you use Callback?
// For example you consume a API, you charge 10   10 clients, and when charge the 10 clients, for example charge a new client, ya no tendrás ese registro, porque ese registro llego después.
// Con un callback puede ayudar a arreglar esto

// Listado de clientes 

const client = ['Juan', 'Pedro', 'Gabriel', 'Yetto'];

// Add new client later two second
function newClient(clients, callback){
    setTimeout(function(){
        client.push(clients);
        callback();
    }, 2000);
}

// The clients show later one second
function showClient(){
    // simulando un servidor
    setTimeout(function(){

        let html = '';

        client.forEach(function(clients){
            html += `<li>${clients}</li>`;
        });
        document.getElementById('app').innerHTML = html;

    }, 1000);
}

// Add new Client
newClient('Yoryi', showClient);
// newClient('Juana', showClient);


// Show Clients

showClient();

console.log(client);