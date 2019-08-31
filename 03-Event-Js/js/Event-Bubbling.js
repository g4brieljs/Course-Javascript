// Event Bubbling 

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click',  function(e){
    console.log('Click en el card');
    e.stopPropagation();
});

infoCurso.addEventListener('click',  function(e){
    console.log('Click en el InfoCard');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click',  function(e){
    console.log('Click en el Boton');
    e.stopPropagation();
});