const autenticado = true;

if(autenticado){
    console.log("El usuario está autenticado");
}

const puntaje = 450;

if(puntaje>400){
    console.log("Excelente!!");
}else if (puntaje > 300){
    console.log("Buen puntaje... felicidades");
}

// A veces no queremos tantos else if por lo que hacemos una funcion con los if

function revisarPuntaje(){
    if(puntaje>400){
        console.log("Excelente!!");
        return;
    }

    if(puntaje>300){
        console.log("Buen puntaje... Felicidades!");
        return;
    }
}
revisarPuntaje();