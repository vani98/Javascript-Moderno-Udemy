//THIS en objetos
nombre = "chocolate";
precio = 3;
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    // creamos un método
    mostrarInfo: function(){
        //si lo planteamos asi está tomando el nombre y precio de fuera
        // console.log(`El producto: ${nombre} tiene un precio de ${precio}`);

        //ESTO ESTA BIEN
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
};

producto.mostrarInfo();