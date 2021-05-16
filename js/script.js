// LIBRERIRA GLIDER//
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel-lista'), {
		slidesToShow: 1,
		slidesToScroll: 'auto',
        duration: .8,
		draggable: true,
		dots: '.carousel-indicador',
  		arrows: {
    		prev: '.carousel-anterior',
			next: '.carousel-siguiente' 
		},
		responsive: [
			{
			  // screens greater than >= 480px
			  breakpoint: 480,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 'auto',
				duration: 0.8
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				duration: 0.8
			  }
			}
		  ] 
	});
});
//MENU DESPLEGABLE//
let btnMenu = document.getElementById('btnmenu');
let Menu = document.getElementById('menu');
btnMenu.addEventListener('click',function(){
	'use strict';
	Menu.classList.toggle('mostrar');
});

// MODAL COMPARTIR //
let modal = document.querySelector('#modal');
let boton = document.querySelector('#compartir');
let cerrar = document.querySelector('#modal-btn');
boton.addEventListener('click', function(){
	modal.classList.toggle("abrir-modal");
});
cerrar.addEventListener('click', function(){
	modal.classList.toggle("abrir-modal");
});

// GALERIA //
let imagenes = document.querySelectorAll('.capturas-img');
let modal1 = document.querySelector('.modal-img');
let img = document.querySelector('.modal__img');
let boton1 = document.querySelector('.modal-btn1');

for (let i = 0; i < imagenes.length; i++) {
	imagenes[i].addEventListener('click', function(e){
		modal1.classList.toggle("modal--open");
		let ruta= e.target.src;
		img.setAttribute("src", ruta);
	});
}
boton1.addEventListener('click', function(){
	modal1.classList.toggle("modal--open");
});