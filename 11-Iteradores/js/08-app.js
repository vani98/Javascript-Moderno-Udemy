//For in

const automovil ={
    modelo: "Camaro",
    year: 1969,
    motor:"6.0"
}

// for(let detalle in automovil){
//     console.log(`${automovil[detalle]}`);
// }

//Agregado en ECMAScript7
for(let[llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}