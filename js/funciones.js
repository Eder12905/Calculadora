//Mi primer archivo de javascript con funciones
//Esta linea nos escribe Hola mundo! en el navegador
document.write("<h1>Hola mundo!</h1>");

//Para crear una variable es con la palabra var o let
let nombre="Eder";
var Edad=18;
document.write("<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write(nombre + " tu edad es: " + Edad);
document.write("<br>");

let num1=9;
var num2="8";
document.write(num1+num2);
document.write("<br>");
document.write ("9"+"8");

//Tipos de datos en js
//Numerico
let numero=20;
//decimal
let numero2=20.6;
//cadena string
let cadena="Los mejoes programadores son 3-A";
document.write("<br>");
document.write(numero);
document.write("<br>");
document.write(numero2);
document.write("<br>");
document.write(cadena);
document.write("<br>");
//Tipos de dato arreglos
//var amigos=["Juan","Pedro","Pablo"];
//document.write(amigos);
document.write("<br>");
let objeto={color:"azul",altura:150,ancho:50};
document.write(objeto);
document.write("<br>");
//no definir variables
//let nombre2;
//document.write(nombre2);

//valores invalidos
var x=10;
var y="hola mundo";
document.write(x*y);
