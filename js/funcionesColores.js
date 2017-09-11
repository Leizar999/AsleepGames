var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; 
var simbolo = "";
var simbol = "";
var random = 0;
var timer = 0;
var NIVELCOLOR = 0;
var RESTARTIEMPO = 0;
var SUMARTIEMPO = 0;
var opc = 1;
var indice = sessionStorage.getItem("user");
var usuarios = JSON.parse(localStorage.getItem("users")); //Nos traemos a todos los usuarios.
var puntosColores = usuarios[indice].juegos.colors.puntos;
var nombre = usuarios[indice].nombre; //usuarios[indice].juegos.colors.puntos += puntosColores;
var partidasColores = usuarios[indice].juegos.colors.partidas;
var aciertosColores = usuarios[indice].juegos.colors.aciertos;
var fallosColores = usuarios[indice].juegos.colors.fallos;

//localStorage.setItem("users",JSON.stringify(usuarios));

//alert(nombre + " El total de puntos es: " + usuarios[indice].juegos.colors.puntos);

//Permitimos al usuario elegir nivel, y no le dejamos salir hasta que no haya elegido:

function elegirNivel(){

	timer = 60;

	do{
        opc = parseInt(prompt("Elige opción: 1. Fácil - 2.Normal", 1));
    }while(opc != 1 && opc != 2);

    if(opc == 2){
    	NIVELCOLOR = 1;
    	RESTARTIEMPO = 5; // Grupo de constantes que mas adelante usaremos para setear los valores a restar y tiempo:
    	SUMARTIEMPO = 2;
    	timer = 30;
    	document.getElementById("tiempo").setAttribute("max",timer);
    }else{
    	NIVELCOLOR = 3;
		RESTARTIEMPO = 3;
		SUMARTIEMPO = 5;
    }
}

//Cambiamos el color con esta función, concatena dos colores, uno el de fondo y otro el que deberemos elegir:

function cambiarColor(){

	simbolo = "background-color: #";
	simbol = "background-color: #";
	for(var i = 0; i < 6; i++){
		random = Math.floor(Math.random() * 16) + 0; // Mediante un random elegimos cada uno de los colores hexadecimales:
		simbolo += hexadecimal[random];
		if(i < 4){
			simbol += hexadecimal[random];
		}else if(random <= 0){
			simbol += hexadecimal[random + NIVELCOLOR]; // Comprobamos si el random es cero para que no salgan valores fuera del array:
		}else if(random - NIVELCOLOR > 2){
			simbol += hexadecimal[random - NIVELCOLOR];
		}else{
			simbol += hexadecimal[random + NIVELCOLOR];
		}
	}
	for(var i = 1; i <= 9; i++){
		document.getElementById("rec" + i).style = simbolo + ";"; //Concatenamos rec, que es como se llama el id del main para darle color:
	}
	random = Math.floor(Math.random() * 9) + 1;
	//alert(simbolo);
	document.getElementById("rec" + random).style = simbol + ";";
}

//Comprobamos el id si es acertado:

function acertado(id){
	var identificador = "rec" + random;
	if(id == identificador){
		alert("Acertado!!");
		timer += SUMARTIEMPO;
		if(timer > parseInt(document.getElementById("tiempo").getAttribute("max"))){
			timer = parseInt(document.getElementById("tiempo").getAttribute("max"));
		}
		puntosColores += 1;
		aciertosColores += 1;
		cambiarColor();
	}else{
		fallosColores += 1;
		timer = timer - RESTARTIEMPO;
		alert("Color equivocado!!");
	}
}

//Esta función establece el tiempo y los valores del temporizador:

function contador(){
	//timer = 16;
	setInterval(function(){
		document.getElementById("tiempo").value = timer; 
		timer = timer - 1;
		document.getElementById("tiempo2").innerHTML = " TIEMPO: " + timer;

		//Si el valor es menor que cero quiere decir que el tiempo se acabó, reseteamos todos los valores y llamamos a las funciones:

		if(timer <= 0){
			setAtributos(puntosColores,partidasColores+=1,aciertosColores,fallosColores);
			localStorage.setItem("users",JSON.stringify(usuarios));
			alert("Se acabó el tiempo!! " + "\n el verdadero era:" + random + "\n PUNTOS: " + puntosColores);
			cambiarColor();
			elegirNivel();
		}
	},1000);
}

//Función que establece los datos en el objeto para luego poder guardalo nuevamente:

function setAtributos(puntos, partidas, aciertos, fallos){
	usuarios[indice].juegos.colors.puntos = puntos;
	usuarios[indice].juegos.colors.partidas = partidas;
	usuarios[indice].juegos.colors.aciertos = aciertos;
	usuarios[indice].juegos.colors.fallos = fallos;
}