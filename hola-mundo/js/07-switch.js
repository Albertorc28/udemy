'use strict'

var edad=30;
var imprime="";

switch(edad){
	case 18:
		imprime="Acabas de cumplir la mayoria 18";
	break;
	case 25:
		imprime="Eres un adulto";
	break;
	case 40:
		imprime="Crisis de los 40";
	break;
	case 75:
		imprime="Anciano";
	break;
	default:
		imprime="Tu edad es neutra";
	break;
}

console.log(imprime);