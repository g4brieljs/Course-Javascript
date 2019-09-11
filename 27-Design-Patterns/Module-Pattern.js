const buyTicket = (function(){

    // Protected
    let event = 'Ticket private for party';
    let price = 100;
    const addTicket = () => {
        const element = document.createElement('p');
        element.textContent = `Buying ticket for: ${event}`;
        document.querySelector('#app').appendChild(element);
    }

    // public
    return {
        showTicket: function(){
            addTicket();
            console.log(price);
        }
    }

})();

buyTicket.showTicket();