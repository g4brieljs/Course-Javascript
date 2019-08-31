// Template Literals

let  producto1 = 'Pizza',
      precio1 = 20,
      producto2 = 'Pan',
      precio2 = 10;

      console.log(producto1);

let html;

// // Forma antigua:
// html = '<ul>' +
//         '<li>Orden: ' + producto1 + '</li>' +
//         '<li>Precio: ' + precio1 + '</li>' +
//         '</ul>';


//Forma Moderna EcmaScript 6

html = `

        <ul>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Precio: ${precio2}</li>
            <li>Total: ${total(precio1, precio2)}</li>
        </ul>

        `;

        function total(precio1, precio2){
            return precio1 + precio2;
        }

        document.getElementById('app').innerHTML = html;