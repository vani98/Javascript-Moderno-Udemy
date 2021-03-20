const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

// btnFlotante.addEventListener("click", ()=>{
//     console.log("Diste click en el boton");
// });

function mostrarOcultarFooter(){
    if(footer.classList.contains("activo")){
        footer.classList.remove("activo");
        this.classList.remove("activo");
        // this hace referencia a lo que mando a llamar, this es btnflotante
        this.textContent = "Idioma y moneda";
    }else{
        footer.classList.add("activo");
        btnFlotante.classList.add("activo");
        this.textContent= "Cerrar";
    }
    // console.log("Diste click en el botón");
}
btnFlotante.addEventListener("click",mostrarOcultarFooter);