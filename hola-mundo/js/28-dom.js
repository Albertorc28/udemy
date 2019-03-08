'use strict'

//DOM - Document Object Model

function cambiaColor(Color){
	caja.style.background=color;
}

//Conseguer elementos con ID concreto

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML="Texto en la caja de JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="hola hola2";

//Conseguir elementos por su etiqueta
/*
var todosLosDivs = document.getElementsByTagName('div');

var valor;
for(valor in todosLosDivs){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
}
*/

//Conseguir elementos por su clase css
var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background="yellow";

var div;
for(div in divsRojos){
	if (divsRojos[div].className=="rojo"){
		divsRojos[div].style.background="red";
	}
}

//Query selector
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta=document.querySelector("div");
console.log(etiqueta);

