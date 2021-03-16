//Pasar a Arrow Function

const reproductor = {
    cancion: "",
    reproducir: id=>console.log(`Reproduciendo canción con el id: ${id}`),
    pausar: () => console.log("pausando..."),
    borrar: id=> console.log(`Borrando cancion ${id}`),
    crearPlaylist: nombre=> console.log(`La playlist ${nombre} ha sido creada satisfactoriamente`),
    reproducirPlaylist: nombre=> console.log(`Se esta reproduciendo la playlist ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = "Enter Sadman";
reproductor.obtenerCancion;

//como lo utilizo nombre del objeto.propiedad
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Mi nueva playlist");
reproductor.crearPlaylist("Mi nueva playlist 2");
reproductor.reproducirPlaylist("Mi nueva playlist");