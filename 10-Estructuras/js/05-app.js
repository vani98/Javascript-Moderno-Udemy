//Switch case

const metodoPago = "efectivo";

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
    default:
        console.log("Aún no has selecionado un método de pago");
    break;
    }

function pagar(){
    console.log("Pagando...");
}