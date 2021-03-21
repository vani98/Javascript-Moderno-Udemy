//Event Bubbling
const titulo = document.querySelector(".titulo");
const infoDiv = document.querySelector(".info");
const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Click en card");
});

infoDiv.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Click en info");
});

titulo.addEventListener("click",e=>{
    e.stopPropagation();
    console.log("Click en titulo");
});
