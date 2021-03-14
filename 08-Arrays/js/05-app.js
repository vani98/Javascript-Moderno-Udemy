//agregar con métodos

//un carrito es un buen ejemplo de un arreglo que tiene objetos
const carrito = [];

//Definir producto

const producto ={
    nombre: "Monitor 34",
    pecio: 400
};
const producto2 ={
    nombre: "Celular",
    pecio: 800
};
carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre: "Teclado",
    pecio: 50
};

//inicio

carrito.unshift(producto3)

console.table(carrito);