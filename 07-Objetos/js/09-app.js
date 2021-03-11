//Sellar un objeto seal

"use strict";
// El use strict trae object methods y controla que hagamos las cosas bien


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

//Congelar un objeto para no volver a modificarlo
Object.seal(producto);

producto.disponible= false;

console.log(producto);

//identificando un objeto congelado
console.log(Object.isSealed(producto));