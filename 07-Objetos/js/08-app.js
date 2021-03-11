"use strict";
// El use strict trae object methods y controla que hagamos las cosas bien


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

//Congelar un objeto para no volver a modificarlo
Object.freeze(producto);

// producto.disponible= false; //estos ya tiran error
// producto.imagen = "imagen.jpg";
console.log(producto);

//identificando un objeto congelado
console.log(Object.isFrozen(producto));