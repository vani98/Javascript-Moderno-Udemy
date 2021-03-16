//While

let i = 1; // Inicializar

// while(i< 10){ // Condición
//     console.log(`Número ${i}`);
//     i++; // Incremento
// }

//FIZZ BUZZ CON WHILE

while (i <100){
    if(i % 15 === 0){
        console.log(`${i}FIZZ BUZZ`);
    }else if(i%3===0){
        console.log(`${i}FIZZ`);
    }else if(i%5===0){
        console.log(`${i}BUZZ`);
    }
    i++;
}