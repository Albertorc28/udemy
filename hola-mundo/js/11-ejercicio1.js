'use strict'

//Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.
//PLUS: Volver a pedir los números si no son números, o son menores o iguales a cero.

var numero1= parseInt(prompt("Introduce el numero1",0));
var numero2= parseInt(prompt("Introduce el numero2",0));

while(numero1 <= 0 || numero2 <= 0 || isNan(numero1) || isNan(numero2)){
	numero1= parseInt(prompt("Introduce el numero1",0));
	numero2= parseInt(prompt("Introduce el numero2",0));
}

if(numero1==numero2){
	alert("Los numeros son iguales");
}else if(numero1>numero2){
	alert("El numero mayor es "+numero1);
	alert("El numero menor es "+numero2);
}else if(numero1<numero2){
	alert("El numero mayor es "+numero2);
	alert("El numero menor es "+numero1);
}else{
	alert("Introduce números correctos");
}