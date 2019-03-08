$(document).ready(function(){

	var caja=$("#caja");

	$("#mostrar").hide();

	$("#mostrar").on('click',function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeIn('slow');
	});

	$("#ocultar").on('click',function(){
		$(this).hide();
		$("#mostrar").show();
		caja.fadeOut('slow');
	});

	$("#todoenuno").on('click',function(){
		caja.slideToggle('slow');
	});

	$("#animar").on('click',function(){
		caja.animate({
						marginLeft:'500px',
						fontSize:'40px',
						height: '100px',
						},'slow')
			.animate({
						borderRadius:'900px',
						marginTop:'100px',
						},'slow')
			.animate({
						borderRadius:'0px',
						marginLeft:'0px',
						},'slow')
			.animate({
						borderRadius:'100px',
						marginTop:'0px',
						},'slow')
			.animate({
						marginLeft:'500px',
						fontSize:'40px',
						height: '100px',
						},'slow');
	});

});