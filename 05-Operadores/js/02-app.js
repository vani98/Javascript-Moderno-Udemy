const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2); // no es muy estricto

// Comparador estricto

console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));

// Diferente

console.log(numero1 != numero2);
console.log(numero1 !== numero2);