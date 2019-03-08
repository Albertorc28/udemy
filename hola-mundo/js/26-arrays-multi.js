'use strict'

var categorias=['Terror','Acción','Comedia'];
var peliculas=['La vida es bella','Gran Torino','Salvar al soldado Ryan'];

var cine=[categorias, peliculas];

/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

/*
var elemento=" ";
do{
	elemento=prompt("Introduce tu pelicula: ");
	peliculas.push(elemento);
}while(elemento != "ACABAR");
	peliculas.pop();
console.log(peliculas);
*/

var indice = peliculas.indexOf('Gran Torino');
if(indice > -1){
	peliculas.splice(indice,1);
}

var peliculas_string= peliculas.join();
//var peliculas_array= peliculas.split(", "); -> Pasar de string a array

console.log(peliculas_string);
//console.log(peliculas_array);
