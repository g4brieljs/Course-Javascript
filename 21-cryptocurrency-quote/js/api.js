class API{
    constructor(apikey){
        this.apikey = apikey;
    }

    // get all currency
    async getCurrencyAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${this.apikey}`;

        //fetch the API
        const urlGetCurrency = await fetch(url);

        // answer in JSON
        const currency = await urlGetCurrency.json();

        // return
        return {
            currency
        }
    }

    // New method, que consulte la API
    
    async getValue(currency, cryptocurrency){
        // cuando mandas varios parametros usas '&'
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${this.apikey}`;

        console.log(url);
        // consultar en REST API
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return{
            resultado
        }
    }
}