//agregar elementos con rest operator

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
const producto3 ={
    nombre: "Teclado",
    pecio: 50
};

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

//quiero que producto3 este al principio

resultado = [producto3, ...resultado]

console.table(resultado);
console.table(carrito);