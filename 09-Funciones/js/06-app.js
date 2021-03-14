//parametros por default

function saludar(nombre= "Desconocido", apellido =" "){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Maria");
saludar("Maria","Apellido");
saludar();