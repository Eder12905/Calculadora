//Funcion para sumar dos numeros
function suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum);
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}
function resta(nume1,nume2){
	let nu1,nu2,res;
	nu1=parseFloat(nume1);
	nu2=parseFloat(nume2);
	res=nu1-nu2;
	document.getElementById("resultadoResta").innerHTML="<h1>La resta es: " + res +"</h1>";
}
function multiplicacion(num1,num2){
	let numer1,numer2,multi;
	numer1=parseFloat(num1);
	numer2=parseFloat(num2);
	multi=numer1*numer2;
	document.getElementById("resultadoMulti").innerHTML="<h1>La multiplicacion es: " + multi +"</h1>";
}
function divicion(numero_1,numero_2){
	let numer_1,numer_2,div;
	numer_1=parseFloat(numero_1);
	numer_2=parseFloat(numero_2);
	div=numer_1/numer_2;
	document.getElementById("resultadoDivicion").innerHTML="<h1>La divicion es: " + div +"</h1>";
}













//Crear funciones en js

//function calcularSuma(){
	//alert("Hola bienvenido!");
	//document.write("Hola");
//}
//let num1=parseInt(prompt("Ingresa un numero: "));
//let num2=parseInt(prompt("Ingresa otro numero: "));
//let suma=num1+num2;
//document.write("La suma es: " + suma);


