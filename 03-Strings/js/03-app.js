// Concatenar strings

const producto = "Monitor 20 Pulgadas ";
const precio ="30USD ";

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));
console.log(producto+"con un precio de: "+precio);
console.log("El producto "+producto+"tiene un precio de "+precio);
console.log("El producto ",producto,"tiene un precio de ",precio);


//ECMAScript6

console.log(`El producto ${producto}tiene un precio de ${precio}`);