//parametros y argumentos

function sumar(a,b){ //a y b son parametros
    console.log(a+b);
}

sumar(2,3); // 2 y 3 son argumentos


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Maria","Dos");
saludar("Maria");
saludar();