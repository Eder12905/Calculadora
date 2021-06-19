var mem1;
var mem2;
var operacion;
function init(){

  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var borrar = document.getElementById('reset');
  var resultado = document.getElementById('resultado');
  var igual = document.getElementById('igual');


 //FUNCIONES
  uno.onclick = function(x){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(x){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(x){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(x){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(x){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(x){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(x){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(x){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(x){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(x){
      resultado.textContent = resultado.textContent  + "0";
  }
  punto.onclick = function(x){
      resultado.textContent = resultado.textContent  + ".";
  }
  borrar.onclick = function(x){
      resetear();
  }

  //OPERACIONES
  suma.onclick = function(x){
      mem1 = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(x){
      mem1 = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(x){
      mem1 = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(x){
      mem1 = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(x){
      mem2 = resultado.textContent;
      resolver();
  }
}

//LIMPIAR
function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  mem1 = 0;
  mem2 = 0;
  operacion = "";
}

//RESOLVER
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(mem1) + parseFloat(mem2);
      break;
    case "-":
        res = parseFloat(mem1) - parseFloat(mem2);
        break;
    case "*":
      res = parseFloat(mem1) * parseFloat(mem2);
      break;
    case "/":
      res = parseFloat(mem1) / parseFloat(mem2);
      break;
  }
  resetear();
  resultado.textContent = res;
}