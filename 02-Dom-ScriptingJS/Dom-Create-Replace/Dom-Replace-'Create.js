// // Working with Traversing 

// const elemento = document.querySelector('.enlace1');

// console.log(elemento.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent = 'Te he hackeado');


// // sibling  

// const enlaces = document.querySelector('ul');

// console.log(enlaces.children[3].previousElementSibling); // Muestra el de atrás
// console.log(enlaces.children[2].nextElementSibling);// Muestra el siguiente



//Create tags html

const enlace = document.createElement('li');

//Add class for the tag
enlace.className = 'enlace5';

//Add id for my tag
enlace.id = 'newLink';

//Add attribute in tag for exaple <a></a>
// enlace.setAttribute('href', '#');

// Add text a my tag
enlace.textContent = 'New list, from Javascript';
//Other form
// enlace.appendChild(document.createTextNode('NewList'));

//add html
document.querySelector('ul').appendChild(enlace);

console.log(enlace);


//Replace tag in HTML with JS

const newTitle = document.querySelector('.title');

newTitle.className = 'title';

newTitle.appendChild(document.createTextNode('Ahora soy otra prsona')) //Agregar texto desde js

const anterior = document.querySelector('.title');
console.log(anterior);z
const elPadre = document.querySelector('main');

elPadre.replaceChildd(newTitle, anterior);


console.log(elPadre);