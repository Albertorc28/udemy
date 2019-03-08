$(document).ready(function(){
	//Load
	//$('#datos').load("https://reqres.in/");

	//Get y Post
	$.get("https://reqres.in/api/users?page=2",{page: 3}, function(reponse){
		response.data.forEach((element,index)=>{
		});
	});

});