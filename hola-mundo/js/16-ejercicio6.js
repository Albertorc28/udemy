'use strict'

//Que nos diga si el número es par o impar.

var numero=parseInt(prompt("Introduce el numero",0));

while(isNaN(numero)){
	var numero=parseInt(prompt("Introduce el numero",0));
}

if(numero % 2 == 0){
	alert("Es par");
}else{
	alert("Es impar");
}