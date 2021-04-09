	//······· Variables
	const carrito = document.querySelector('#carrito'); // El carrito de cursos que sale con el hover
	const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // la tabla vacía que está dentro de carrito
	const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
	const listarCursos = document.querySelector('#lista-cursos'); // donde están todos los divs de cursos
	let articulosCarrito = [];

	registrarEventListener();
	//······· Función con todos mis EventListeners
	function registrarEventListener (){
	    //Cuando agregas un curso presionando "Agregar al curso"
	    listarCursos.addEventListener('click',agregarCurso);
		//Elimina curso del carrito
		carrito.addEventListener('click',eliminarCurso);
		//Vaciar carrito completo
		vaciarCarritoBtn.addEventListener('click',() =>{
			// console.log("Vaciando carrito");
			articulosCarrito =[]; //Reseteamos el arreglo
			LimpiarHTML();//Eliminamos todo el HTML
		});
	}   
	//······· Funciones
	function agregarCurso(e){
	    e.preventDefault();
	    if(e.target.classList.contains('agregar-carrito')){
	       	const cursoSeleccionado = e.target.parentElement.parentElement;
			leerDatosCurso(cursoSeleccionado);
	    }
	}
	
//Elimina curso del carrito
function eliminarCurso(e){
	// console.log('Desde eliminar curso'); 
	if(e.target.classList.contains('borrar-curso')){
		const cursoId = e.target.getAttribute("data-id");

		//Elimina del arreglo de articulos carrito por el data-id
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
		// console.log(articulosCarrito);

		carritoHTML();
	}
	}

//leer el contenido al agregar carrito

function leerDatosCurso(curso){
	// console.log(curso);
	//crear un objeto con el contenido del curso actual
	const infoCurso ={
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		//Nos interesa el de descuento que está dentro de un span
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}	

	//Revisa si un elemento ya existe en el carrito
	//usaremos .some para verificar si un objeto se repite
	const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
	// console.log(existe);
	if (existe){
		//Actualizamos la cantidad
		// console.log("Si se repite");
		const cursos = articulosCarrito.map(curso =>{
			if(curso.id === infoCurso.id){
				curso.cantidad++;
				// console.log("Se actualiza");
				console.log(curso);
				return curso; //retorna el objeto actualizado
			}else{
				return curso; //retorna objetos que no son duplicados
			}
			//actualiza cantidad	
			articulosCarrito =[...cursos];
			console.log(articulosCarrito);
		});
	}else{
		//Agrega elementos al arreglo de carito
	articulosCarrito = [...articulosCarrito, infoCurso];
	// console.log("Si no pasa por el if");
	console.log(articulosCarrito);
	}

	// console.log(infoCurso);
	// console.log("El que queda");
	console.log(articulosCarrito);
	carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){

	//Limpiar el HTML
	LimpiarHTML();
	//Recorre el carrito y genera el HTML
	articulosCarrito.forEach(curso => {
		//destructuring
		const {imagen, titulo, precio, cantidad, id} = curso;
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${curso.imagen}" width="100">
		</td>
		<td>
			${titulo}
		</td>
		<td>
		${precio}
		</td>
		<td>
		${cantidad}
		</td>
		<td>
		<a href="#" class="borrar-curso" data-id="${id}"> X </a> 
		</td>
		`;
		//Agrega el HTML del carrito en el tbody
		contenedorCarrito.appendChild(row);
	});
}

//Elimina los cursos del tbody

function LimpiarHTML(){
	//Forma lenta
	// contenedorCarrito.innerHTML = "";
	//mientras tiene al menos un elemento dentro se ejecuta

	while(contenedorCarrito.firstChild){
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}