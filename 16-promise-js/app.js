// promises

const wait = new Promise(function(resolve, reject){
    // You can use promise, for exaple, for wait a date in the future
    // For example, you add 100 clients, you can create a promise, what wait the charge all client
    // Go to use resolve
    setTimeout(function(){
        resolve('The app run!');
    }, 3000);
});

// We have run us program
// With then go to function of wait, and we can acces the resolve
wait.then(function(mensaje){
    console.log(mensaje);
});

// New promise, using reject

const applyOffer = new Promise(function(resolve, reject){
    // Simulando a Error
    const offer = false;
    if(offer){
        resolve('Apply Offer for you');
    }else{
        reject('You no have Offer');
    }
});

// Ever you use then
// you ever use then with cath
applyOffer.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
