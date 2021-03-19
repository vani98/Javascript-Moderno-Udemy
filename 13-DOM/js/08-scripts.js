const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children);


// console.log(navegacion.children[0]);
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

    const card = document.querySelector(".card");
    // card.children[1].children[1].textContent = "Nuevo Heading Desde Traversing The DOM";
    // card.children[0].src = "img/hacer3.jpg"
    // console.log(card.children[0]);   

    // traversing the dom de children a padre
    // console.log(card.parentNode); 
    // console.log(card.parentElement.parentElement.parentElement); 

    //Traversing the dom entre hermanos

    // console.log(card);
    // console.log(card.nextElementSibling);
    // console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

    // const ultimoCard = document.querySelector(".card:nth-child(4)");
    // console.log(ultimoCard.previousElementSibling);
    // const ultimoCard2 = document.querySelector(".card:last-of-type");
    // console.log(ultimoCard2);

// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);


const contenedor = document.querySelector(".contenedor-cards");
console.log(contenedor.firstElementChild);
console.log(contenedor.lastElementChild);