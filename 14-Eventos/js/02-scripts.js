//eventos con el mouse

const nav = document.querySelector(".navegacion");

//registrar un evento
nav.addEventListener("dblclick", ()=>{
    console.log("Entrando a la navegación");
    nav.style.backgroundColor = "white";
});
nav.addEventListener("mouseout", ()=>{
    console.log("Saliendo de la navegación");
    nav.style.backgroundColor = "transparent";
});
