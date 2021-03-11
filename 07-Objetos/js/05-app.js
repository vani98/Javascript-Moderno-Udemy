// Objetos dentro de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso:"1kg",
        medida:"1m"
    }
};
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

// Otro ejemplo
const clinicas = {
    pais: "Argentina",
    provincias:{
        buenosAires: "buenos aires",
        santaFe: "santa fe",
    },
    sedeCentral:{
        direccion: "direccion de la sede central",
        medicos:{
            nombre1: "medico1",
            nombre2: "medico2"
        },
    },
};
console.log(clinicas);
console.log(clinicas.sedeCentral.medicos.nombre1);