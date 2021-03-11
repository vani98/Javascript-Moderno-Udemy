
// Destructuring del objeto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//Acceder a los valores del objeto y asignarlos a una variable _______*


// const nombre = producto.nombre; // forma anterior de hacerlo
// console.log(nombre);

//Destructuring (Sacar de una estructura) forma nueva ________*

// Si solamente es un dato por sacar podemos hacerlo asi

    // const { nombre } = producto;

    //Si son dos esto no seria conveniente
    // const { precio } = producto;

    // Para ello necesitamos hacer esto
const { nombre, precio } = producto;

console.log(nombre);
console.log(precio);
