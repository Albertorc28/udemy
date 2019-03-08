'use strict'

//Prueba var
var numero=40;
console.log(numero); //valor 40
if(true){
	var numero=50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50


//Prueba let
var texto="curso1";
console.log(texto); //valor "curso1"
if(true){
	let texto="curso2";
	console.log(texto); //valor "curso2"
}

console.log(texto); //valor "curso1"