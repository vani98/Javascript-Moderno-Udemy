const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log("Puedes comprar");
}else if(!puedePagar && !usuario){
    console.log("No puedes comprar");
}
else if(!usuario){
    console.log("Inicia sesión");
}else if(!puedePagar){
    console.log("Fondos insuficientes");
}