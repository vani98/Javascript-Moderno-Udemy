//query selector

const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como en CSS

const info = document.querySelector(".premium .info")
console.log(info);

//seleccionar el segundo card de hospedaje

const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)");

console.log(segundoCard);

//Seleccionar con id
const formulario = document.querySelector("#formulario");
console.log(formulario);

//seleccionar elementos por su etiqueta HTML
const navegacion = document.querySelector("nav");
console.log(navegacion);