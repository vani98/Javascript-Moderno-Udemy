// En vez de hacer esto

const nombre = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

// Podemos hacer esto (un objeto que agrupe todo en una sola variable)

    //Object literal
const producto = {
    //nombre = llave del objeto, monitor 20 pulgadas = valor
    //son grupos de llave y valor
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};
console.log(producto);