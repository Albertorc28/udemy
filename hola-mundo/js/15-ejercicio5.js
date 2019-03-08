'use strict'

//Mostrar todos los numeros divisores de un número introducido por el usuario.

var numero=parseInt(prompt("Introduce el numero",0));

for(var i = 1; i + numero; i++){
	if(numero % i == 0){
		console.log("divisor: "+i);
	}
}

