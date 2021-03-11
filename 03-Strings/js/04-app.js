const producto = "              Monitor 20 pulgadas                ";
console.log(producto);
console.log(producto.length);
//Eliminar espacio del inicio 

console.log(producto.trimStart()); //para que sirve? si un usuario quiere pasar la validacion con espacios en blanco o se equivoca obtendriamos el valor real.

//Eliminar espacio del final

console.log(producto.trimEnd());

//Métodos de forma encadenada o CHANNING (colocar un método tras otro) 

console.log(producto.trimStart().trimEnd());

//El método que realmente se usa cuando es necesario eliminar los espacios de adelante y de atras es
console.log(producto.trim());

