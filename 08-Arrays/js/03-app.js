//Cómo recorrer un arreglo?

const meses= ["enero","febrero","marzo","abril","mayo","junio"];

console.table(meses);
console.log(meses.length);


console.log("===== for loop");
// for loop

for(let i=0; i<meses.length;i++){
    console.log(meses[i]);
}