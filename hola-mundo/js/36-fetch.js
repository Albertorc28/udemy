'use strict'

var div_usuarios=document.querySelector("#usuarios");
var div_usuario2=document.querySelector("#usuario2");

var usuarios=[];
	getUsuarios()
		.then(data=>data.json())
		.then(users=>{
			listadoUsuarios(users.data)	
			return getUsuario2();	
		})
		.then(data=>data.json())
		.then(user=>{
			mostrarUsuario2(user.data);
			return getInfo();
		});
		.then(data=>{
			console.log(data);
		});

function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

function getUsuario2(){
	return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
		var profesor={
		nombre:'Victor',
		apellidos:'Robles',
		url:'https://as.com/'
	};
	return new Promise((resolve.reject)=>{
		var profesor_string= JSON.stringify(profesor);
		if(typeof profesor_string!='string') return reject('error');
			return resolve(profesor_string);
	};	
}

function listadoUsuarios(usuarios){
	usuarios.map((user, i)=>{
			let nombre=document.createElement('h3');
			nombre.innerHTML=i+'. '+user.first_name+" "+user.last_name;
			div_usuarios.appendChild(nombre);
			document.querySelector(".loading").style.display="none";
		});
}

function mostrarUsuario2(user){
	let nombre=document.createElement('h4');
	let avatar=document.createElement('img');
	nombre.innerHTML=user.first_name+" "+user.last_name;
	avatar.src=user.avatar;
	avatar.width='100';
	div_usuario2.appendChild(nombre);
	div_usuario2.appendChild(avatar);
	document.querySelector("#usuario2 .loading").style.display="none";		
};
