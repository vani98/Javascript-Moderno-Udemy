window.addEventListener("scroll",()=>{
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();
    const boton = document.querySelector(".btn-mi-viaje")
    // console.log(ubicacion);
    if(ubicacion.top< 615 && ubicacion.bottom<550){
        console.log("El elemento es visible");
        boton.style.backgroundColor ="grey";
        boton.style.color ="white";
    }else{
        console.log("Aún no se ve");
        boton.style.backgroundColor ="white";
        boton.style.color ="black";
    } 
});