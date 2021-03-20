//generar HTML desde JS

//crear un nuevo enlace ========================

const enlace = document.createElement("a");
enlace.textContent ="Nuevo Enlace";
enlace.href = "/nuevoEnlace";
enlace.target = "_blank";
enlace.setAttribute("data-enlace", "nuevo-enlace");
enlace.classList.add("alguna-clase");
enlace.onclick = miFunction;
console.log(enlace);

function miFunction(){
    alert("Diste click");
};

const nav = document.querySelector(".navegacion");
nav.appendChild(enlace); //agregar al final
// console.log(nav.children);
nav.insertBefore(enlace,nav.children[1]); //agregar en medio

//Crear un CARD ==============================

const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria","concierto");

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement('p');
parrafo3.textContent ="$800 por persona";
parrafo3.classList.add("precio");


//crear div con info

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

console.log(info);

//crear imagen

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "Texto alternativo";

//crear el card padre

const card = document.createElement("div");
card.classList.add("card");

//Asignar imagen

card.appendChild(imagen)

//Asignar info

card.appendChild(info);
console.log(card);

//llamar contenedor card para insertar

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card,contenedor.children[0]);

