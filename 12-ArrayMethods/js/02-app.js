//Find index

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Encontrar el indice de abril

//Forma con ForEach
// const encontrar = meses.forEach((mes,i) => {
//     if(mes==="Abril"){
//         console.log(`Abril ha sido encontrado en la posición número: ${i}`);
//     }  
// });

//findIndex

const indice = meses.findIndex(mes=> mes==="Abril");
console.log(indice);

//findIndex con un array con objetos

const indice2 = carrito.findIndex(producto=>producto.nombre==="Tablet");
console.log(indice2);
