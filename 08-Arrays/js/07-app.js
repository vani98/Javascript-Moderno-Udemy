//Eliminar en un array

const carrito = [];

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
const producto4 ={
    nombre: "Celular2",
    pecio: 100
};

carrito.unshift(producto3)

//ELIMINAR ULTIMO ELEMENTO
console.table(carrito);

// carrito.pop();

//ELIMINAR EL PRIMERO

// carrito.shift();

//ELIMINAR UNO DEL MEDIO

    //toma dos parametros
    //1: Desde que elemento quiero empezar a cortar
    //2: Cuantos elementos queres eliminar
carrito.splice(1,1);

    //CON SPLICE TAMBIEN PODEMOS ELIMINAR EL PRIMERO
    // carrito.splice(0,1);

    //O EL ULTIMO
    // carrito.splice(3,1);
console.table(carrito);