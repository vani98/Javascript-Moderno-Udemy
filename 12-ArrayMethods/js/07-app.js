const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ["Agosto","Septiembre"];
const meses3 =["Octubre","Diciembre"];

const todosMeses = meses.concat(meses2,meses3,"Otro mes");

console.log(todosMeses);

const todosMeses2 =[...meses,...meses2,...meses3,"Otro mes"];
console.log(todosMeses2);