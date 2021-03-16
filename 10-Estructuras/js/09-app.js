//Operador ternario

const autenticado = true;
const puedePagar = false;

//ternario
// console.log(autenticado && puedePagar? "Puede pagar" : "No Puede pagar");

//ternario sin else
// console.log(autenticado && puedePagar? "Puede pagar" : null);


// Ternario anidado
console.log(autenticado ? puedePagar? "Si  esta autenticado y puede pagar" : "Si esta autenticado , no puede pagar" : "No, no esta autenticado");