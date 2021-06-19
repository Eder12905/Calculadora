//condicionales if-else
var a=10;
var b=12;
//numero mayor
if (a>b) {
	document.write("El mayor es: " + a);
}else{
	document.write("El mayor es: " + b);
}
//ciclo for
//numeros del 0 al 10
document.write("<br>");
for (var i =0;i < 11; i++) {
	document.write(i);
}
//ciclo while
document.write("<br>");
var i=0;
while(i<11){
	document.write("<br>" + " " +i);
	i++;
}
//ciclo do while
var z=0;
do{
	document.write("<br>" + " " +z)
	z++;
}while(z<11);

//seleccion multiple
//validar si un numero entre 1 y 4 1=hijo 2=hija 3=padre 4=madre
document.write("<br>");
var familia=2;
switch(familia){
	case 1: 
	document.write("Hijo");
	break;
	case 2:
	document.write("Hija");
	break;
	case 3:
	document.write("padre");
	break;
	case 4:
	document.write("madre");
	break;
	default:
	document.write("no valido");
}


