let elemento;

elemento = document;
elemento = document.all[10];

elemento = document.images[2].getAttribute('src');

//scripts
elemento = document.scripts;

//ejemplo

elemento = document.images;

let img = document.images;
let imgArr = Array.from(img);

imgArr.forEach(function(imagen){
    console.log(imagen)
});

console.log(imgArr);