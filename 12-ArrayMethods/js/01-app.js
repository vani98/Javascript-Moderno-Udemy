// .includes y .some
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Revisar si un valor existe en el arreglo

// .INCLUDE  ============= Solo para array tradicional
//Hecho manual
// meses.forEach(mes=>{
//     if (mes === "Enero"){
//         console.log("Enero existe");
//     }
// });

//Hecho con array Method
// const resultado = meses.includes("Enero");
// console.log(resultado);

// .SOME ============ Para array con objetos y tradicional

//array con objetos
const existe = carrito.some(producto=>producto.nombre === "Celular");

console.log(existe);

//array tradicional

const existe2 = meses.some(mes=>mes==="Enero");
console.log(existe2);