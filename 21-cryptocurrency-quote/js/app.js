const quote = new API('f1edaeb4aa907915e6d2d70b828b1c4a12430b53e8c060cf649e6851fc90bd59');
quote.getCurrencyAPI();

// Instanciar la clase
const ui = new Interface();

// read the form

const form = document.getElementById('formulario');

// Eventlistener
form.addEventListener('submit', e =>{
    e.preventDefault();
    
    // read the select currency
    const currencySelect = document.querySelector('#moneda');
    const currencySelected = currencySelect.options[currencySelect.selectedIndex].value;
    // selected only text of options
    const currencyOption = currencySelect.options[currencySelect.selectedIndex].innerText;

    //read the select cryptoCurrency
    const cryptoSelect = document.querySelector('#criptomoneda');
    const cryptoSelected = cryptoSelect.options[cryptoSelect.selectedIndex].value;

    // Know if select the two dates
    if(currencySelected === '' || cryptoSelected === ''){
        //show error
        ui.showMessage('Both fields with required', 'alert bg-danger text-center');
    }else{
        // show all good
        // cuando utilizas Async Await siempre te retorna un promise
        quote.getValue(currencySelected, cryptoSelected)
            .then(data => {
                // el primer parametro busca el RAW de nuestro objeto que puedes ver con un console.log(data);
                ui.showResults(data.resultado.RAW, currencySelected, cryptoSelected, currencyOption);
            })
        
    }

})