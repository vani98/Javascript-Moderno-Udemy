// else if

const dinero = 100;
const totalAPagar = 500;
tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar){
    console.log("Si podemos pagar");
}else if(tarjeta){ 
    console.log("Si puedo pagar porque tengo la tarjeta");
}else if(cheque){
    console.log("Si puedo pagar porque tengo un cheque");
}
else{
    console.log("Fondos insuficientes");
}
