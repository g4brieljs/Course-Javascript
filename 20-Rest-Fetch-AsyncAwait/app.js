
async function readTodos(){
    // Wait the answer
    const answer = await fetch('https://jsonplaceholder.typicode.com/todos');

    const date = await answer.json();

    return date;

}

readTodos()
    .then( users => console.log(users));


    // The programing Asincrona no hace que se bloquean las funciones 