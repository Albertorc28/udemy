"use strict"

var texto = "Hola mundo soy una variable global";
var numero = 12;function holaMundo (texto){
    var hola_mundo = "Texto dentro de la funcion";    
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

holaMundo(texto);

/*
Las variables texto y numero pueden llamar dentro y fuera de la funcion ya que estan creada de manera global(fuera)
La variable hola_mundo solo podria ser llamada dentro de la funcion ya que ha sido creada ahi
*/