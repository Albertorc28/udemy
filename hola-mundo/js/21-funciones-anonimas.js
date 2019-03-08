'use strict'

//Funciones anónimas y callbacks

function sumame(numero1, numero2, sumaYmuestra, sumaPordos){
	var sumar=numero1+numero2;

	sumaYmuestra(sumar);
	sumaPordos(sumar);

	return sumar;
}

sumame(5,7, function(dato){
	console.log("La suma es: ", dato);
},
function (dato){
	console.log("La suma por dos es: ", (dato*2));
});


/*Función de flecha
sumame(5,7, dato => {
	console.log("La suma es: ", dato);
},
dato => {
	console.log("La suma por dos es: ", (dato*2));
});
*/
