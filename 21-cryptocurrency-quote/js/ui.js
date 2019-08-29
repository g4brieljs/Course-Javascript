class Interface{

    constructor(){
        this.init();
    }

    init(){
        this.createSelect();
    }

    // create method select
    createSelect(){
        quote.getCurrencyAPI()
            // promise
            .then(currency => {
                // console.log(currency);
                // recorre el objeto

                const select = document.querySelector('#criptomoneda');

                for( const [key, value] of Object.entries(currency.currency.Data)){
                    // add the symbol and name 
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.appendChild(document.createTextNode(value.CoinName));
                    // add select
                    select.appendChild(option);
                    // Hay que agregalor despues del del select
                }
                // para recorrer objetos se utilizar Object entrys
                // toma los objetos y los vuelve arreglos
            })
    }

    // create a new  Method for message
    showMessage(message, classes){
        // esto permite mandar algun error, o los resultados, o cuando cargue, esto permitira que sea mas dinamico
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));
        
        // Seleeccionar el mensaje 
        const divMensaje = document.querySelector('.mensajes'); 
        divMensaje.appendChild(div);
        // Show content
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 2000);
    }

    // print result of Qoutes

    showResults(resultado, moneda, crypto, textCurrency){
        // asi puedes ir accediendo a un objeto en javascript
        const dateCurrency = resultado[crypto][moneda];
        console.log(resultado);
        // Only show 2 decimals
        let price = dateCurrency.PRICE.toFixed(2),
            changeDay = dateCurrency.CHANGEPCTDAY.toFixed(2);
        // build template

        let templateHTML = `

            <div class="card bg-danger">
                <div class="card-body text-light">
                    <img style="width:10%" class="align-center" src="https://www.cryptocompare.com${dateCurrency.IMAGEURL}">   
                    <h2 class="card-title">Results:</h2>
                    <p>The price of ${dateCurrency.FROMSYMBOL} from currency ${textCurrency} is of: $${price}
                    </p>
                    <p>Change of last day: % ${changeDay}
                    </p>
                </div>
            </div>
        
        `;

        // print result

        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}
