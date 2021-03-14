//funciones en objetos

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`)},
    pausar: function(){
        console.log("pausando...");
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`La playlist ${nombre} ha sido creada satisfactoriamente`); 
    },
    reproducirPlaylist: function(nombre){
        console.log(`Se esta reproduciendo la playlist ${nombre}`);
    }
};

//como lo utilizo nombre del objeto.propiedad
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Mi nueva playlist");
reproductor.crearPlaylist("Mi nueva playlist 2");
reproductor.reproducirPlaylist("Mi nueva playlist");

// reproductor.agregarMusica(50);
// reproductor.agregarMusica(40);
// reproductor.agregarMusica(10);
