const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

//const en variables no se pueden reasignar

const nombreProducto = "nombre";

// nombreProducto = "nuevo nombre"; //NO SE REASIGNA

//LOS OBJETOS SI SE PUEDEN REASIGNAR

producto.disponible = false;
console.log(producto); //sus propiedades se reescribieron

delete producto.precio;
console.log(producto);