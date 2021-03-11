//Destructuring con objetos complejos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso:"1kg",
            medida:"1m"
        },
        fabricacion:{
            pais:"china"
        }
    }
};

//esto hacemos si es sencillo
const {nombre} = producto;
console.log(nombre);


//pero y si quiero saber el pais?

const {informacion:{fabricacion, fabricacion:{pais}}} = producto;

console.log(fabricacion);
console.log(pais);

