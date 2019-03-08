'use strict'

/*Calucladora:
-Que pida dos numeros.
-Si introducimos uno mal que nos lo vuelva a pedir.
-Mostrar el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/

var numero1=parseInt(prompt("Introduce el numero",0));
var numero2=parseInt(prompt("Introduce el numero",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	numero1=parseInt(prompt("Introduce el numero",0));
	numero2=parseInt(prompt("Introduce el numero",0));
}

var resultado = "Suma: "+(numero1+numero2)+"<br>"+
				"Resta: "+(numero1-numero2)+"<br>"+
				"Multiplicación: "+(numero1*numero2)+"<br>"+
				"División: "+(numero1/numero2)+"<br>";


var resultadoC ="Suma: "+(numero1+numero2)+"\n"+
				"Resta: "+(numero1-numero2)+"\n"+
				"Multiplicación: "+(numero1*numero2)+"\n"+
				"División: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadoC);
console.log(resultadoC);