var d2 = document.getElementById('decimal').value;
var d1 = parseInt(d2);
console.log(d1);
var boton = document.getElementById("btconvertir");
boton.addEventListener("click", convertirBinario);

function convertirBinario(){
    if(d1 >= 128){
        console.log("1");
        document.getElementById('app').innerHTML = `<p>1</p>`;
        d1 = d1-128;
    }else{
        document.getElementById('app').innerHTML = `<p>0</p>`;
    }      

    if(d1 >= 64){
        document.getElementById('app').innerHTML = `<p>1</p>`;
        d1 = d1 - 64;
        }else{
            document.getElementById('app').innerHTML = `<p>0</p>`;
            }

    if(d1 >= 32){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 32;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }

    if(d1 >= 16){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 16;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }

    if(d1 >= 8){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 8;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }

    if(d1 >=4){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 4;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }

    if(d1 = d1 >= 2){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 2;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }

    if(d1 >= 1){
    document.getElementById('app').innerHTML = `<p>1</p>`;
    d1 = d1 - 1;
    }else{
    document.getElementById('app').innerHTML = `<p>0</p>`;
    }
}


