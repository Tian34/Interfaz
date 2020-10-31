var mte=function(){

		var n1=document.getElementById("e");
		var n2=document.getElementById("est");
	
		
		n2.className="estante";


}

var no1=function(){

var n1=document.getElementById("e");
var n2=document.getElementById("est");
n2.className="no";

		}

var mts=function(){

		var n1=document.getElementById("s");
		var n2=document.getElementById("si");
	
		
		n2.className="silla";
		

}

var no2=function(){

var n1=document.getElementById("s");
var n2=document.getElementById("si");
n2.className="no";

		}

var mtp=function(){

		var n1=document.getElementById("p");
		var n2=document.getElementById("pt");
	
		
		n2.className="patin";
		

}

var no3=function(){

var n1=document.getElementById("p");
var n2=document.getElementById("pt");
n2.className="no";

		}


var msig=function(){

		var n1=document.getElementById("ir");
		var n2=document.getElementById("otra");
		var n3=document.getElementById("vol");

		n1.className="no";
		n2.className="siguiente";
		n3.className="volv";
		

}

var volv=function(){

var n1=document.getElementById("vol");
var n2=document.getElementById("otra");
var n3=document.getElementById("ir");
n1.className="no";
n2.className="no";
n3.className="sig";
		
		}


var mdp1=function(){

		var n1=document.getElementById("boton1");
		var n2=document.getElementById("boton2");
		var n3=document.getElementById("d1");
		var n4=document.getElementById("d2");
		
		n1.className="no";
		n2.className="bd";
		n3.className="no";
		n4.className="dialogopapa";

}

var mdp2=function(){

		var n1=document.getElementById("boton2");
		var n2=document.getElementById("boton3");
		var n3=document.getElementById("d2");
		var n4=document.getElementById("d3");
		
		n1.className="no";
		n2.className="bd";
		n3.className="no";
		n4.className="dialogopapa";

}

var mdp3=function(){

		var n1=document.getElementById("pp");
		var n2=document.getElementById("d3");
		var n3=document.getElementById("nombrepapa");
		var n4=document.getElementById("boton3");

		n1.className="no";
		n2.className="no";
		n3.className="no";
		n4.className="no";
}




var sonido = new Audio();
sonido.src="musica.mp3";
sonido.play();


function subir(){
	sonido.volume += .1; 	
}

function bajar(){
	sonido.volume -= .1;
}
