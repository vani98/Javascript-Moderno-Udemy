//ForEach y .map

const pendientes =["Tarea","Comer","Trabajar en mi proyecto","Estudiar Javascript"];

pendientes.forEach((pendiente,i) => console.log(`${i}:${pendiente}`));

const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audífonos",precio: 300},
    {nombre: "Teclado",precio: 400}, 
    {nombre: "Celular",precio: 700} 
];

carrito.forEach(producto=>console.log(producto.nombre)); 

const nuevoArreglo = carrito.map(producto=>producto.nombre); 

console.log(nuevoArreglo);