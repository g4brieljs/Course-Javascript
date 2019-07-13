let Encabezado = document.querySelector(".encabezado");
    let add_text = document.querySelector('#text_Edit');
    

let change_text = document.querySelector('#btn_change_text').addEventListener('click', function(){
    
    let addText = add_text.value;
    Encabezado.innerText = addText;

    console.log(addText);
});



console.log(add_text, change_text);