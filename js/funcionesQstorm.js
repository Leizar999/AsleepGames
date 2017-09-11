var random = 0;
var timer = 0;
var RESTARTIEMPO = 0;
var SUMARTIEMPO = 0;
var opc = 1;
var valida = "";
var indice = sessionStorage.getItem("user");
var usuarios = JSON.parse(localStorage.getItem("users")); //Nos traemos a todos los usuarios.
var puntosQstorm = usuarios[indice].juegos.qstorm.puntos;
var nombre = usuarios[indice].nombre;
var partidasQstorm = usuarios[indice].juegos.qstorm.partidas;
var aciertosQstorm = usuarios[indice].juegos.qstorm.aciertos;
var fallosQstorm = usuarios[indice].juegos.qstorm.fallos;

//Permitimos al usuario elegir nivel, y no le dejamos salir hasta que no haya elegido:

function elegirNivel(){

	timer = 60;

	do{
        opc = parseInt(prompt("Elige opción: 1. Fácil - 2.Normal", 1));
    }while(opc != 1 && opc != 2);

    if(opc == 2){
    	RESTARTIEMPO = 5; // Grupo de constantes que mas adelante usaremos para setear los valores a restar y tiempo:
    	SUMARTIEMPO = 2;
    	timer = 30;
    	document.getElementById("tiempo").setAttribute("max",timer);
    }else{
		RESTARTIEMPO = 3;
		SUMARTIEMPO = 5;
    }
}

//Cambiamos el color con esta función, concatena dos colores, uno el de fondo y otro el que deberemos elegir:

function preguntas() {

    //Añadimos todas las palabras en un array:

	var pregs = [{pregunta:'¿En qué deporte se usa tiza?', respuesta1: "Escalada", respuesta2: "Billar", valida: "Billar"},
	{pregunta:'¿Qué instrumento musical tiene nombre y forma geométricos? ', respuesta1: "Triángulo", respuesta2: "Xilófono", valida: "Triángulo"},
	{pregunta:'¿Quién escribió "El Diario de Ana Frank"?', respuesta1: "Ella misma", respuesta2: "Su prima", valida: "Ella misma"},
	{pregunta:'¿Cómo se llaman las crías de la mula?', respuesta1: "Es estéril", respuesta2: "Potros", valida: "Es estéril"},
	{pregunta:'¿Cuál es el limite de edad establecido para participar en los Juegos Olímpicos?', respuesta1: "98", respuesta2: "Ninguno", valida: "Ninguno"},
	{pregunta:'¿Qué isla del Caribe tiene nombre de flor?', respuesta1: "Orquídea", respuesta2: "Margarita", valida: "Margarita"},
	{pregunta:'¿Qué órgano segrega la hormona insulina?', respuesta1: "El hígado", respuesta2: "El páncreas", valida: "El páncreas"},
	{pregunta:' ¿Cuál es el fruto del roble?', respuesta1: "No tiene", respuesta2: "La bellota", valida: "la bellota"},
	{pregunta:'¿Fue Felipe V de España hijo de Felipe IV?', respuesta1: "Si", respuesta2: "No", valida: "No"},
	{pregunta:'¿Cuál de los cinco sentidos se desarrolla primero?', respuesta1: "El tacto", respuesta2: "El olfato", valida: "El olfato"},
	{pregunta:'¿Cuál es el único mamífero con cuatro rodillas?', respuesta1: "El ratón", respuesta2: "El elefante", valida: "El elefante"},
	{pregunta:'¿Qué tienen las ranas en la boca que no tienen los sapos?', respuesta1: "Papilas", respuesta2: "Dientes", valida: "Dientes"},
	{pregunta:'¿Pueden nadar los gorilas?', respuesta1: "Si", respuesta2: "No", valida: "Si"},
	{pregunta:'¿Qué hace una persona alrededor de 295 veces durante la comida?', respuesta1: "Tragar", respuesta2: "Masticar", valida: "Tragar"},
	{pregunta:'¿Cómo se dice gratis en polaco?', respuesta1: "Dyienky", respuesta2: "Gratis", valida: "Gratis"},
	{pregunta:'¿Cuál es el ojo defectuoso de Popeye?', respuesta1: "El derecho", respuesta2: "El izquierdo", valida: "El derecho"},
	{pregunta:'¿Cuántas personas se refugiaron en el Arca de Noé?', respuesta1: "Doce", respuesta2: "Ocho", valida: "Ocho"},
	{pregunta:'¿Qué pie puso primero Neil Amstrong sobre la Luna?', respuesta1: "El izquierdo", respuesta2: "El derecho", valida: "El izquierdo"},
	{pregunta:'¿Cuál es el segundo idioma más hablado del mundo?', respuesta1: "Español", respuesta2: "Inglés", valida: "Español"},
	{pregunta:'¿Qué es más valioso un brillante o un diamante?', respuesta1: "Un brillante", respuesta2: "Un diamante", valida: "Un diamante"},
	{pregunta:'¿Cuál es el signo de puntuación más usado?', respuesta1: "El punto", respuesta2: "La coma", valida: "La coma"},
	{pregunta:'¿Cómo se transmiten más rápidamente las ondas sonoras, a través del agua o del aire?', respuesta1: "Por agua", respuesta2: "Por aire", valida: "Por agua"},
	{pregunta:'¿Cuál fue la primera ave domesticada?', respuesta1: "El loro", respuesta2: "La oca", valida: "La oca"},
	{pregunta:'¿Cuáles son los dos elementos esenciales del acero?', respuesta1: "Hierro y niquel", respuesta2: "Hierro y carbono", valida: "Hierro y carbono"},
	{pregunta:'¿Cuál es el dedo más sensible de la mano?', respuesta1: "El pulgar", respuesta2: "El índice", valida: "El índice"},
	{pregunta:'¿Con qué dos colores suele tener problemas un daltónico?', respuesta1: "Azul y amarillo", respuesta2: "Rojo y verde", valida: "Rojo y verde"},
	{pregunta:'¿Cuál es el gentilicio de Badajoz?', respuesta1: "Pacenses", respuesta2: "Badenses", valida: "Pacenses"},
	{pregunta:'¿Cuál es el úinco órgano que sabe que es un órgano?', respuesta1: "El corazón", respuesta2: "El cerebro", valida: "El cerebro"}
	];
    
    //Con un random, seleccionamos la posición para la pregunta, del 1 al 100:

    random = Math.floor(Math.random() * 28);

    valida = pregs[random].valida;

    document.getElementById("pregunta").innerHTML = pregs[random].pregunta;
    document.getElementById("respuesta1").value = pregs[random].respuesta1;
    document.getElementById("respuesta2").value = pregs[random].respuesta2;
}

//Comprobamos el id si es acertado:

function acertado(valor){

	if(valor == valida){
		alert("Acertado!!");
		timer += SUMARTIEMPO;
		if(timer > parseInt(document.getElementById("tiempo").getAttribute("max"))){
			timer = parseInt(document.getElementById("tiempo").getAttribute("max"));
		}
		puntosQstorm += 2;
		aciertosQstorm += 1;
		preguntas();
	}else{
		fallosQstorm += 1;
		timer = timer - RESTARTIEMPO;
		alert("equivocado!!");
		preguntas();
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
			setAtributos(puntosQstorm, partidasQstorm +=1, aciertosQstorm, fallosQstorm);
			localStorage.setItem("users",JSON.stringify(usuarios));
			alert("Se acabó el tiempo!! " + "\n PUNTOS: " + puntosQstorm);
			preguntas();
			elegirNivel();
		}
	},1000);
}

//Función que establece los datos en el objeto para luego poder guardalo nuevamente:

function setAtributos(puntos, partidas, aciertos, fallos){
	usuarios[indice].juegos.qstorm.puntos = puntos;
	usuarios[indice].juegos.qstorm.partidas = partidas;
	usuarios[indice].juegos.qstorm.aciertos = aciertos;
	usuarios[indice].juegos.qstorm.fallos = fallos;
}