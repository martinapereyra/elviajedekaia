
//movimiento del fondo
//placas de inicio y de fin (de todos los finales)
//el Reinicio no cambia de color 


var canvas;
var ctx;
var fuente = new FontFace('Nothing', "url(fonts/Nothing.ttf) format('truetype')");
document.fonts.add(fuente);
fuente.load().then(dibujar);

//agrego una variable para saber si el juego está inciado o no
var inicio=false;

//VARIABLES PARA PLACAS

var reglamento=false;

var placaFinalTriste=false;
var placaFinalFeliz=false;
var placaJaula=false;
var placaFinalbasura=false;

/*Variables para color de botón*/
var colorBoton="#000";

// Variables para IMÁGENES

var imgKaia;
var imgBotella;
var imgPapitas;
var imgLata;
var imgJaula;
var imgLemmini;
var imgMadriguera;

// Variables para IMÁGENES FIJAS

var imgBrush;
var imgLemmingContador;
var imgCorazonLleno;
var imgCorazonVacio;

// Variables para el JUEGO

var puntosLemming=0;
var vidas=3;
var teclaSalto=false;
var teclaSuperSalto=false;
var tiempoJuego;

//variables array de obstáculos y lemmings

var posicionesX=[900,950,1000,1050,1100,1200,1300,1400,1500,1600,1700,1800,2000];
var cintaCaminadora;

//VARIABLES PARA MOVIMIENTO DE KAIA
var contador=0;
var segundos=0;
var intervaloKaia=0;

/*VARIABLES PARA AUDIOS*/
var audioFinalTriste;
var audioLemming;
var audioPerder;
var audioInicial;
var audioFinalFeliz;
var audioChoque;
var audioJaula;
var audioInstrucciones;


// Variables para el FONDO

var posicionFondo=0;

//var imgPisoDos;
//var pisoDos= new Piso(800,375);

// Variables para OBJETOS

var kaia= new Personaje(90,298,153,80);

var brush= new Imgfijas (-3,10);
var lemmingContador= new Imgfijas (35,27);
var corazonLleno1= new Imgfijas(670,27);
var corazonLleno2= new Imgfijas(710,27);
var corazonLleno3= new Imgfijas(750,27);

var corazonVacio1=new Imgfijas(670,27);
var corazonVacio2=new Imgfijas(710,27);
var corazonVacio3=new Imgfijas(750,27);

var botella=new Obstaculo(1200,360,"botella",41,15);
var lata=new Obstaculo(900,360,"lata",22,13);
var papitas=new Obstaculo(700,353,"papitas",45,23);
var jaula=new Obstaculo(2500,260,"jaula",111,115);
var lemmini=new Obstaculo(500,360,"lemmini",35,15);
var madriguera=new Obstaculo(14000,265,"madriguera",397,113);

/////////// FUNCIÓN DIBUJAR

function dibujar() {
	canvas=document.getElementById("canvas");
	//canvas.style.backgroundImage="url(img/inicio.png)";
	ctx=canvas.getContext("2d");
  	//ctx.font = "40px Nothing";
	//ctx.fillStyle = "#000";
	//ctx.fillText("El Viaje de Kaia",100,100);

	//dibujaTexto(); // TEXTO EN CANVAS
	dibujarTextoInicio();
	reglas();
	
}



// PLACAS
function reglas(){
	canvas.style.backgroundImage="url(img/inicio.jpg)";
	canvas.style.backgroundSize="cover";
	posicionFondo=0;
	canvas.style.backgroundPosition=posicionFondo;
	//audioInstrucciones.play();

}

function finalBasura(){
	canvas.style.backgroundImage="url(img/placa-basura.jpg)";
	canvas.style.backgroundSize="cover";
	posicionFondo=0;
	canvas.style.backgroundPosition=posicionFondo;
}

function finalTriste(){
	canvas.style.backgroundImage="url(img/placa-triste.jpg)";
	canvas.style.backgroundSize="cover";
	posicionFondo=0;
	canvas.style.backgroundPosition=posicionFondo;
	
}
function finalFeliz(){
	canvas.style.backgroundImage="url(img/placa-feliz.jpg)";
	canvas.style.backgroundSize="cover";
	posicionFondo=0;
	canvas.style.backgroundPosition=posicionFondo;
	
}
function finalJaula(){
	canvas.style.backgroundImage="url(img/placa-jaula.jpg)";
	canvas.style.backgroundSize="cover";
	posicionFondo=0;
	canvas.style.backgroundPosition=posicionFondo;
}


//CONTADOR ES LA ANIMACIÓN, NO ES EL CONTADOR :D
contador=function (){
	if(segundos%2==0){
		imgKaia.src="img/kaiacorre_1.png";

			//que esta almacenada en...
	}else{
		imgKaia.src="img/kaiacorre_7.png";
	}
}
//function intervalo(){
intervaloKaia=setInterval(function(){
	segundos=intervaloKaia++;
	console.log(segundos);
},2000/10);
//}



//creé una función juego, en donde muevo todo lo que antes tenía en dibujar.
function juego(){
	borrar();
	inicio=true; //indico que el juego está iniciado
	
	placaJaula=true;
	placaFinalFeliz=true;
	placaFinalTriste=true;
	placaFinalbasura=true;


	canvas.style.backgroundImage="url(img/fondo-kaia3.jpg)";
	canvas.style.backgroundSize="cover";

//inicio el contador para la animación de Kaia
	

// manera en que dibuja al personaje

/*	imgKaia= new Image(); //imgKaia es una nueva Imagen
	imgKaia.src="img/kaiacorre_1.png"; //que esta almacenada en...
	imgKaia.onload=function(){ //cuando se cargue, haz lo siguiente...
	kaia.dibujaPersonaje(); //... dibuja el personaje con el método que puse adentro de la clase 
	}
*/

    imgKaia= new Image(); //imgKaia es una nueva Imagen
	imgKaia.onload=function(){ //cuando se cargue, haz lo siguiente...
	kaia.dibujaPersonaje(); //... dibuja el personaje con el método que puse adentro de la clase 
	}

   //MANERA EN QUE DIBUJA BRUSH

	imgBrush = new Image();
	imgBrush.src="img/brush.png";
	imgBrush.onload=function(){
		brush.dibujaBrush();
		}

   //MANERA EN QUE DIBUJA LEMMING DEL CONTADOR

	imgLemmingContador = new Image();
	imgLemmingContador.src="img/lemming_der.png";
	imgLemmingContador.onload=function(){
		lemmingContador.dibujaLemmingContador();
		}

    //MANERA EN QUE DIBUJA CORAZONES LLENOS

	imgCorazonLleno= new Image();
	imgCorazonLleno.src="img/corazonvida.png";
	imgCorazonLleno.onload=function(){
		corazonLleno1.dibujaCorazonLleno1();
		}

	imgCorazonLleno= new Image();
	imgCorazonLleno.src="img/corazonvida.png";
	imgCorazonLleno.onload=function(){
		corazonLleno2.dibujaCorazonLleno2();
		}

	imgCorazonLleno= new Image();
	imgCorazonLleno.src="img/corazonvida.png";
	imgCorazonLleno.onload=function(){
		corazonLleno3.dibujaCorazonLleno3();
		}

   //MANERA EN QUE DIBUJA CORAZONES VACÍOS

	imgCorazonVacio= new Image();
	imgCorazonVacio.src="img/corazonvidano.png";
	imgCorazonVacio.onload=function(){
		corazonVacio1.dibujaCorazonVacio1();
		}

	imgCorazonVacio= new Image();
	imgCorazonVacio.src="img/corazonvidano.png";
	imgCorazonVacio.onload=function(){
		corazonVacio2.dibujaCorazonVacio2();
		}

	imgCorazonVacio= new Image();
	imgCorazonVacio.src="img/corazonvidano.png";
	imgCorazonVacio.onload=function(){
		corazonVacio3.dibujaCorazonVacio3();
		}

	
	/*Manera en que dibuja la Botella*/
	imgBotella=new Image();
	imgBotella.src="img/botella.png";
	imgBotella.onload=function(){
		botella.dibujaObstaculo(imgBotella);
		}

	/*Manera en que dibuja las Papitas*/
	imgPapitas=new Image();
	imgPapitas.src="img/papitas.png";
	imgPapitas.onload=function(){
		papitas.dibujaObstaculo(imgPapitas);
		}

	/*Manera en que dibuja la Lata*/
	imgLata=new Image();
	imgLata.src="img/lata.png";
	imgLata.onload=function(){
		lata.dibujaObstaculo(imgLata);
		}

	/*Manera en que dibuja la Jaula*/
	imgJaula=new Image();
	imgJaula.src="img/jaula.png";
	imgJaula.onload=function(){
		jaula.dibujaObstaculo(imgJaula);
		}

	/*Manera en que dibuja los Lemmini*/
	imgLemmini=new Image();
	imgLemmini.src="img/lemming_izq.png";
	imgLemmini.onload=function(){
		lemmini.dibujaObstaculo(imgLemmini);
	}

	/*Manera en que dibuja la madriguera*/
	imgMadriguera=new Image();
	imgMadriguera.src="img/hogar.png";
	imgMadriguera.onload=function(){
		madriguera.dibujaObstaculo(imgMadriguera);
	}

 	//AUDIOS 
	audioPerder=new Audio();
	audioPerder.src="audios/final-basura.mp3";

	audioFinalTriste=new Audio();
	audioFinalTriste.src="audios/final-triste2.mp3";

	audioLemming=new Audio();
	audioLemming.src="audios/lemming.mp3";
	audioInicial=new Audio();
	audioInicial.src="audios/fondo2.mp3";
	audioFinalFeliz=new Audio();
	audioFinalFeliz.src="audios/final-feliz3.mp3";
	audioChoque=new Audio();
	audioChoque.src="audios/perder-puntos.mp3";
	audioJaula=new Audio();
	audioJaula.src="audios/final-jaula2.mp3"
  	audioInstrucciones = new Audio();
  	audioInstrucciones.src="audios/instrucciones3.mp3"
 
	
// >>>>>>>>>>>>>>>>>>>>>>>>>>> INTERVALO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	tiempoJuego=setInterval(function(){
		if(vidas>0){
			audioInstrucciones.pause();
			audioInicial.play();
			audioFinalFeliz.pause();
			audioFinalTriste.pause();
			audioJaula.pause();


			botella.mover();
			papitas.mover();
			lata.mover();
			jaula.mover();
			lemmini.mover();
			botella.colision();
			papitas.colision();
			lata.colision();
			jaula.colision();
			lemmini.colision();
			madriguera.colision();
			madriguera.moverHogar();
			if(teclaSalto==true){
				kaia.salto();
			}else if(teclaSuperSalto==true){
				kaia.supersalto();
			}else{
				kaia.abajo();
			}
			//faltan las colisiones
			if(kaia.y==298){
				//intervalo();
				contador();
			}
			borrar();
			
			brush.dibujaBrush();
			lemmingContador.dibujaLemmingContador();
			kaia.dibujaPersonaje();
			botella.dibujaObstaculo(imgBotella);
			papitas.dibujaObstaculo(imgPapitas);
			lata.dibujaObstaculo(imgLata);
			jaula.dibujaObstaculo(imgJaula);
			lemmini.dibujaObstaculo(imgLemmini);
			madriguera.dibujaObstaculo(imgMadriguera);

	
	
			// PARA QUE SE MUEVA EL FONDO
			dibujaTexto();
			posicionFondo-=2;
			canvas.style.backgroundPosition=posicionFondo+"px 0px";
			

			if(vidas==3){
				corazonLleno1.dibujaCorazonLleno1();
				corazonLleno2.dibujaCorazonLleno2();
				corazonLleno3.dibujaCorazonLleno3();
			}else if(vidas==2){
				corazonLleno1.dibujaCorazonLleno1();
				corazonLleno2.dibujaCorazonLleno2();
				corazonVacio3.dibujaCorazonVacio3();
			}else if(vidas==1){
				corazonLleno1.dibujaCorazonLleno1();
				corazonVacio2.dibujaCorazonVacio2();
				corazonVacio3.dibujaCorazonVacio3();
			}else if(vidas==0){
				pausar();
				borrar();
				tiempoJuego=0;
				if(tiempoJuego==0){
				botella.x=1200;
				botella.y=360;
				lata.x=900;
				lata.y=360;
				papitas.x=700;
				papitas.y=353;
				jaula.x=2500;
				jaula.y=260;
				lemmini.x=500;
				lemmini.y=360;
				madriguera.x=14000;
				madriguera.y=265;
				}
				//ctx.font="80px Nothing";
				//ctx.fillStyle="#000";
				//ctx.fillText("FIN",360,300);
				dibujarTextoReinicio();
				audioInicial.pause();
				audioPerder.play();
				finalBasura();
				imgKaia.src="img/"
			}else if(vidas==2000){
				pausar();
				borrar();
				//ctx.font="40px Nothing";
				//ctx.fillStyle="#000";
				//ctx.fillText("FIN JAULA",285,300);//imagen de Kaia en la jaula
				dibujarTextoReinicio();
				audioJaula.play();
				audioInicial.pause();
				finalJaula();
				imgKaia.src="img/"

				tiempoJuego=0;
				if(tiempoJuego==0){
				botella.x=1200;
				botella.y=360;
				lata.x=900;
				lata.y=360;
				papitas.x=700;
				papitas.y=353;
				jaula.x=2500;
				jaula.y=260;
				lemmini.x=500;
				lemmini.y=360;
				madriguera.x=14000;
				madriguera.y=265;
				}
			}else if(vidas==1000&&puntosLemming>=5){
				pausar();
				borrar();
				//ctx.font="40px Nothing";
				//ctx.fillStyle="#000";
				//ctx.fillText("FINAL FELIZ",175,300);//hay que cambiar imagen a final feliz
				dibujarTextoReinicio();
				audioFinalFeliz.play();
				audioInicial.pause();
				finalFeliz();
				imgKaia.src="img/"

				tiempoJuego=0;
				if(tiempoJuego==0){
				botella.x=1200;
				botella.y=360;
				lata.x=900;
				lata.y=360;
				papitas.x=700;
				papitas.y=353;
				jaula.x=2500;
				jaula.y=260;
				lemmini.x=500;
				lemmini.y=360;
				madriguera.x=14000;
				madriguera.y=265;
				}
	
			}else if(vidas==1000&&puntosLemming<5){
				pausar();
				borrar();
				dibujarTextoReinicio();
				//ctx.font="40px Nothing";
				//ctx.fillStyle="#000";
				//ctx.fillText("FINAL TRISTE",175,300);//hay que cambiar imagen a final triste
				audioFinalTriste.play();
				audioInicial.pause();
				finalTriste();
				imgKaia.src="img/"

				tiempoJuego=0;
				if(tiempoJuego==0){
				botella.x=1200;
				botella.y=360;
				lata.x=900;
				lata.y=360;
				papitas.x=700;
				papitas.y=353;
				jaula.x=2500;
				jaula.y=260;
				lemmini.x=500;
				lemmini.y=360;
				madriguera.x=14000;
				madriguera.y=265;
				}				
			}
				
		}
	},500/25);
}

function pausar(){
	clearInterval(tiempoJuego);
}

function pausarDos(){
	clearInterval(intervaloKaia);
}



/////////// CLASE PERSONAJE

function Personaje(x,y,ancho,alto){
	this.x=x;
	this.y=y;
	this.ancho=ancho;
	this.alto=alto;

	// métodos

	this.salto=function() {
		if(this.y>250){
			this.y-=25;
			imgKaia.src="img/kaiacorre_4.png";
		}

	}

	this.supersalto=function(){
		if(this.y>190){
			this.y-=40;
			imgKaia.src="img/kaiacorre_4.png";
		}
	}
	//para que vuelva a la posición original después de saltar
	this.abajo=function(){
		this.y==295;
		imgKaia.src="img/kaiacorre_1.png"

	}

	//función genérica para dibujar una imagen en un punto del canvas
	this.dibujaPersonaje=function(){
		ctx.drawImage(imgKaia,this.x,this.y,this.ancho,this.alto);
	}

}

//////// CLASE IMAGENES FIJAS

function Imgfijas(x,y){
	this.x=x;
	this.y=y;

	// métodos 
	this.dibujaBrush=function(){
		ctx.drawImage(imgBrush,this.x,this.y);
	}

	this.dibujaLemmingContador=function(){
		ctx.drawImage(imgLemmingContador,this.x,this.y);

	}


	this.dibujaCorazonLleno1=function(){
		ctx.drawImage(imgCorazonLleno,this.x,this.y);
	}
	this.dibujaCorazonLleno2=function(){
		ctx.drawImage(imgCorazonLleno,this.x,this.y);
	}
	this.dibujaCorazonLleno3=function(){
		ctx.drawImage(imgCorazonLleno,this.x,this.y);
	}


	this.dibujaCorazonVacio1=function(){
		ctx.drawImage(imgCorazonVacio,this.x,this.y);
	}
	this.dibujaCorazonVacio2=function(){
		ctx.drawImage(imgCorazonVacio,this.x,this.y);
	}
	this.dibujaCorazonVacio3=function(){
		ctx.drawImage(imgCorazonVacio,this.x,this.y);
	}


}
///////// FUNCIÓN BORRAR

function borrar(){
	canvas.width=800;
	canvas.height=450;
}

///////// FUNCIÓN TEXTO

function dibujaTexto() {

	ctx.font="20px Impact";
	ctx.fillStyle="#4387b5";
	ctx.fillText("x"+puntosLemming,90,43);
}

function dibujarTextoInicio(){
	borrar();
	ctx.font="30px Nothing";
	ctx.fillStyle=colorBoton;
	ctx.fillText('INICIAR',268,290);
}

function dibujarTextoReinicio(){
	borrar();
	ctx.font="25px Nothing";
	ctx.fillStyle=colorBoton;
	ctx.fillText('REINICIAR',320,300);
	
}

function Obstaculo(x,y,tipo,ancho,alto){
	this.x=x;
	this.y=y;
	this.tipo=tipo;
	this.ancho=ancho;
	this.alto=alto;

	/*this.dibujaPiso=function(){
		ctx.drawImage(imgPiso,this.x,this.y);
	}
	this.moverPiso=function(){
		this.x-=5;

	}*/

	this.dibujaObstaculo=function(img){
		ctx.drawImage(img,this.x,this.y,this.ancho,this.alto);

	}
	this.mover=function(){
		if(this.x>-50){
			this.x-=5;
		}else{
			this.sortear();
		}
	}
	this.moverHogar=function(){
		this.x-=5;
	}
	this.sortear=function(){
	
	//Sorteo de obtáculos

		this.x=posicionesX[Math.floor(
			Math.random()*posicionesX.length)];
		
		
		/*this.x=Math.floor(
		Math.random()*(3000-900+1)
		)+900;
		*///en y no lo sorteamos porque los obstáculos tienen que estar todos sobre la plataforma
	}	

	this.colision=function(){	
		if(
			(this.y+this.alto)>kaia.y
			&&(this.y)<(kaia.y+kaia.alto)
			&&(this.x+this.ancho)>kaia.x
			&&((this.x)>140)&&((this.x)<205)
			){
			console.log("colisioné")
			this.sortear();
			if(this.tipo=="lemmini"){
				puntosLemming++;
				audioLemming.play()
			}else if(this.tipo=="jaula"){
				vidas=2000; //núm de vidas random para forzar que vaya al final de la jaula
			}else if(this.tipo=="madriguera"){
				vidas=1000; //núm de vidas random para forzar que vaya al final de la madriguera
			}else{
				vidas--;
				audioChoque.play();	
			}
		}
	}
}

document.addEventListener("keydown",function(e){
	if(vidas>0&&vidas<4){
	switch(e.keyCode) {
		case 38: // flecha arriba
			teclaSalto=true;
			kaia.salto();
			pausarDos();	
		break;
		case 32: // barra espaciadora
			kaia.supersalto();
			teclaSuperSalto=true;
			pausarDos();
			
			
		break;
	   }
	}
});



document.addEventListener("keyup",function(e){
	kaia.y=298;
	teclaSalto=false;
	teclaSuperSalto=false;
});



/*Reinicio de juego*/
document.addEventListener('click',function(e){
	//Acá evaluo en función de vidas y de la variable inicio, si estoy al principio o al final del juego
	if(vidas==0 || vidas==1000 || vidas==2000){
		if(e.x>213&&e.x<500&&e.y>225&&e.y<300){
			vidas=3;
			puntosLemming=0;
			juego();
		}
	}else if(inicio==false){
		//si inicio es falso estamos al principio del juego y llamo a la función juego
		juego();


	}

	

});
document.addEventListener('mousemove',function(e){
	//si está al final o al principio del juego:
	if((vidas==0 || vidas==1000 || vidas==2000) || inicio==false){
		if(e.x>213&&e.x<500&&e.y>225&&e.y<300){
				canvas.style.cursor="pointer";
				colorBoton="#fff";
				dibujarTextoReinicio();
				teclaSalto=false;
				teclaSuperSalto=false;

		}else{
			canvas.style.cursor="";
			colorBoton="#000";
			dibujarTextoReinicio();


		}
		//y si es al principio, hago que redibuje el botón de inicio.
		if(inicio==false){
			dibujarTextoInicio();
			reglas();		
			audioInstrucciones.play();

		}
	}
});
