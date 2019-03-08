'use strict'

var nombre="Victor Robles";
var nombres=["Victor Robles","Juan López","Manolo Garcia","Jose Martin",52,true];

var lenguajes=new Array("PHP","JS","Go","Java");

//console.log(nombres[2]);
/*
var elemento=parseInt(prompt("¿Qué elemento del array quieres?",0));
if(elemento>=nombres.length){
	alert("Introduce el número correcto menor que "+nombres.length);
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

/*
for(var i=0; i<lenguajes.length;i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((elemento, indice)=>{
	document.write("<li>"+indice+" - "+elemento+"</li>");
});
document.write("</ul>");


//BUSQUEDA
var busqueda=lenguajes.find(lenguaje=>lenguaje=="PHP");
console.log(busqueda);