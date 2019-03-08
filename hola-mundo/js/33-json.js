'use strict'

//JSON - JavaScript Object Notation

var pelicula={
	titulo:'Batman Begins',
	year:2010,
	pais:'Estados Unidos'
};

var peliculas=[
	{titulo:'Batman Returns', year:2012, pais:'Reino Unido'},
	pelicula
];

var caja_peliculas=document.querySelector("#peliculas");
var index;
for (index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	caja_peliculas.append(p);
}