//Pasarle parametros a un Arrow Function
const aprendiendo = function(tecnologia,tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo("Javascript1","Node.js1");

const aprendiendo2 = (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2("Javascript2","Node.js2"));