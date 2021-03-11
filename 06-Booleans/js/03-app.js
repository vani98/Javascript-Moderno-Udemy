// Errores comunes

const autenticado = false;

// Poner === true está de más y por lo tanto está mal hecho

// if(autenticado === true){
//     console.log("Si puedes ver netflix");
// }else{
//     console.log("No no puedes ver");
// }

// ESTO ESTÁ BIEN ____________*

// if(autenticado){
//     console.log("Si puedes ver netflix");
// }else{
//     console.log("No no puedes ver");
// }

// PERO PODRÍA ESTAR MEJOR ______*
// Operadores ternarios

console.log(autenticado? "puedes ver Netflix":"No puedes ver ");

