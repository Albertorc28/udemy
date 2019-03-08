'use strict'

//Plantillas de texto

var nombre=prompt("Introduce nombre");
var apellidos=prompt("Introduce apellidos");

//var texto="Mi nombre es: "+nombre+"<br/>Mis apellidos son: "+apellidos;

var texto=`
			<h1>Hola</h1>
			<h3>Mi nombre es: ${nombre}</h3>
			<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);