'use strict'

//Hacer un programa que muestre los números que hay entre dos números introducidos por el usuario.

var numero1=parseInt(prompt("Introduce el primer numero",0));
var numero2=parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De "+numero1+"a "+numero2+"están estos números</h1>");
for(var i = numero1; i <= numero2;i++){
	document.write(i+"<br/>");
}