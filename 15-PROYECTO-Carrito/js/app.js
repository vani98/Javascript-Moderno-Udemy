	//······· Variables
	const carrito = document.querySelector('#carrito'); // El carrito de cursos que sale con el hover
	const contenedorCarrito = document.querySelector('lista-carrito tbody'); // la tabla vacía que está dentro de carrito
	const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
	const listarCursos = document.querySelector('#lista-cursos'); // donde están todos los divs de cursos
	registrarEventListener();
	//······· Función con todos mis EventListeners
	function registrarEventListener (){
	    //Cuando agregas un curso presionando "Agregar al curso"
	    listarCursos.addEventListener('click',agregarCurso);
	}   
	//······· Funciones
	function agregarCurso(e){
	    e.preventDefault();
	    if(e.target.classList.contains('agregar-carrito')){
	        console.log("Agregando al carrito");
	    }
	}
	
