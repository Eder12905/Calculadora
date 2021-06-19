function menor(numero1,numero2,numero3) {
	var n1 = numero1;
	var n2 = numero2;
	var n3 = numero3;
	var men = Math.min(n1,n2,n3);
	document.getElementById("menor").innerHTML="<h1>El menor es: " + men +"</h1>";
}

function dia(numero){
    let dias;
    var dia;
    dias=parseInt(numero);

    switch(dias){
        case 1:
        document.getElementById("dia").innerHTML="<h1>Lunes</h1>";
        break;
        case 2:
        document.getElementById("dia").innerHTML="<h1>martes</h1>";
        break;
        case 3:
        document.getElementById("dia").innerHTML="<h1>miercoles</h1>";
        break;
        case 4:
        document.getElementById("dia").innerHTML="<h1>jueves</h1>";
        break;
        case 5:
        document.getElementById("dia").innerHTML="<h1>viernes</h1>";
        break;
        case 6:
        document.getElementById("dia").innerHTML="<h1>sabado</h1>";
        break;
        case 7:
        document.getElementById("dia").innerHTML="<h1>domingo</h1>";
        break;
        default:
        document.getElementById("dia").innerHTML="<h1>No valido</h1>";
        break;
    }
}

function edad(edad1){
    let e;
    var p;
    e=parseInt(edad1);

    if(e<=3){
        document.getElementById("edad").innerHTML="<h1>Eres un bebé</h1>"
    }else
    if(e>3 && e<13){
        document.getElementById("edad").innerHTML="<h1>Eres un niño</h1>"
    }else
    if (e>13 && e<18){
        document.getElementById("edad").innerHTML="<h1>Eres un adolescente</h1>"
    }else{
        document.getElementById("edad").innerHTML="<h1>Eres un adulto</h1>"
    }
}

