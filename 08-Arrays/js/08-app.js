//Destructuring con arreglos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const {nombre} = producto;

console.log(nombre);

//crear la variable y extraer el valor en un mismo paso

const numeros = [10,20,30,40,50];

const [ , ,tercero] = numeros;

const [uno, dos, ...tres] = numeros; 

console.log(tercero);
console.log(tres);