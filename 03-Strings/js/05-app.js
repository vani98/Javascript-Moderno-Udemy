const producto = 'Monitor 20 pulgadas';

//.replace para reeamplazar un texto

console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

// .slice para cortar (extrae una sección de una cadena y devuelve una cadena nueva)s

console.log(".slice");

console.log(producto.slice(0,10)); // deja lo seleccionado, borra el resto
console.log(producto.slice(8)); // toma un solo numero, el segundo ya que no está borra todo
console.log(producto.slice(2,1)); // el primer numero nunca debe de ser mas grande que el segundo

// Alternativa a slice .substring
console.log("substring");

console.log(producto.substring(0,10));
//DIFERENCIA   
//al tratar de engañarlo substring sabe que quizás nos pudimos equivocar al indicar el numero de inicio mayor al final e invierte el 2 con el 1
console.log(producto.substring(2,1));


// Ejemplo de como usamos esto, para tomar la letra inicial del nombre de una persona y mostrarlo en grande

const usuario ="Juan";

console.log(usuario.substring(0,1)); 
// aunque mas facil es .charAt
console.log(usuario.charAt(0));
