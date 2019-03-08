$(document).ready(function(){

	//Selector id
	var rojo= $("#rojo").css("background","red")
						.css("color","white");
	var amarillo=$("#amarillo").css("background","yellow")
								.css("color","blue");
	var verde=$("#verde").css("background","green")
								.css("color","white");

	//Selector de clases
	var mi_clase=$('.zebra').css('padding','10px');

	$('.sin_borde').on('click',function(){
		$(this).addClass('zebra');
	});

	//Selector de etiquetas
	var parrafos=$('p').css("cursor","pointer");
	parrafos.on('click',function(){
		var that=$(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
		$(this).removeClass("grande");
		}
	});

	//Selector de atributos
	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','blue');

	//Otros
	//$('p, a').addClass('margen-superior');

	var busqueda=$("#caja .elemento2").find('.resaltado');
	console.log(busqueda);

});