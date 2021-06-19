//validar formulario
function validarFormulario(form1){

//Validar el usuario
	var usuario=form1.usuario;
	if(usuario.value==""){
		//alert("Debes ingresar un valor en el usuario!");
		document.getElementById("Alerta").innerHTML="Debes ingresar un valor en el usuario!";
		document.getElementById("Alerta").className="alert alert-warning";
		usuario.focus();
		usuario.select();
		return false;
	}
//validar contraseña 
var password=form1.password;
if(password.value=="" || password.value.lenght <8){
	document.getElementById("Alerta").innerHTML="Debes ingresar una contraseña!";
	document.getElementById("Alerta").className="alert alert-warning";
	password.focus();
	return false;
}

//validar el correo electrónico
	var correo=form1.email.value;
	var expresionCorreo=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreo.test(correo)){
	document.getElementById("Alerta").innerHTML="Debes proporcionar un correo válido!";
	document.getElementById("Alerta").className="alert alert-warning";
		return false
	}  

	//validar las tecnologias
var tecnologias=form1.tecnologia;
var checkSeleccionado=false;
//se revisa si hay un checkbox seleccionado
for (var i = 0; i < tecnologias.length; i++) {
	if(tecnologias[i].checked){
		checkSeleccionado=true;
	}
}
if(!checkSeleccionado){
	document.getElementById("Alerta").innerHTML="Debes seleccionar alguna tecnologia!";
	document.getElementById("Alerta").className="alert alert-warning";
	return false;
}


//Validar el genero de la persona
var genero=form1.genero;
var radioSeleccionado=false;
//revisar con un ciclo cual radio esta seleccionado
for (var i=0; i<genero.length; i++) {
	if (genero[i].checked) {
		radioSeleccionado=true;

	}
}
if (!radioSeleccionado){
	document.getElementById("Alerta").innerHTML="Debes seleccionar tu genero!!";
	document.getElementById("Alerta").className="alert alert-warning";

	return false;
}
//VAlidar la ocupacion
let ocupacion=form1.ocupacion;
if(ocupacion.value==""){
	document.getElementById("Alerta").innerHTML="Debes seleccionar una ocupacion!";
	document.getElementById("Alerta").className="alert alert-warning";

	return false
}
//CUANDO EL FORMULARIONES VALIDAADO
	document.getElementById("Alerta").innerHTML="El formulario está validado correctamente!";
	document.getElementById("Alerta").className="alert alert-warning";
return true;





}