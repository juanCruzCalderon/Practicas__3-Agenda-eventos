function get(argument) {
	return document.querySelector(argument);
}
function getAll(argument) {
	return document.querySelectorAll(argument);
}
function print(argument) {
	console.log(argument);
}

function restante(target) {
	const hoy=new Date();
	const evento=new Date(target);
	let resultado=evento.getTime() - hoy.getTime();
	resultado/=(1000*60*60*24);
	return Math.ceil(resultado);
}


const tareas=get(".tareas");
const form=get(".form");
form.addEventListener("submit", e=>{
	e.preventDefault();
	let tarea=document.createElement("div");
	tarea.innerHTML=`<div class="tarea">
						<p class="tarea__nombre">${form.nombre.value}</p>
						<p class="tarea__falta">faltan ${restante(form.fecha.value)} dias</p>
						<p class="tarea__fecha">${form.fecha.value}</p>
						<button class="tarea__eliminar">x</button>
					</div>`;
	tareas.appendChild(tarea);
	let ultimoBoton=getAll(".tarea__eliminar");
	ultimoBoton[ultimoBoton.length-1].addEventListener("click",()=>{
		tareas.removeChild(tarea);
	});
});





