const producto = "Monitor 20 Pulgadas";

//.repeat permite repetir una cadena de texto

const texto = " en promoción".repeat(3); // si pongo numeros con decimales redondea
console.log(texto);
console.log(`${producto}${texto} !!!`);

//Split, dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, aprender a programar"
console.log(hobbies.split(","));

const tweet = "Aprendiendo JS moderno #JSModernoConJuan";
console.log(tweet.split("#"))