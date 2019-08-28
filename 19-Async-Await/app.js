// Te permite crear funciones asincronas, que se ejecuten junto a otras

// Async Await
 async function getClients(){
    // crear un promise
    // resolve cuando se cumple
    // reject cuando algo falla
    const clients = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(`Dowloads clients...`)
        }, 2000);
    });
    // error or not
    const error = true;
    if(!error){
        // await detiene la funcion hasta que se descarguen todos los clientes
        const response = await clients;
        return response;
    }else{
        await Promise.reject(`Error...`);
    }
 }

 getClients()
    // resolve is for .then
    .then(res => console.log(res))
    // error is for .catch
    .catch(error => console.log(error));