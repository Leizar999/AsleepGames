var indice = sessionStorage.getItem("user"); //Nos traemos el índice del objeto.
var usuarios = JSON.parse(localStorage.getItem("users")); //Nos traemos a todos los usuarios.


//Pintamos la tabla de estadísticas, concatenando los valores:

function estadisticas(){
	var tabla = "";
	tabla += "<table><tr><th>NOMBRE</th><th>NOMBRE DE JUEGO</th><th>PUNTOS</th><th>PARTIDAS</th><th>VICTORIAS</th><th>DERROTAS</th></tr>"
	for(var i = 0; i < usuarios.length; i++){
		tabla += "<tr><td rowspan='3'>" + usuarios[i].nombre + "</td><td>HANGMAN</td><td>" + usuarios[i].juegos.hangman.puntos + "</td><td>" + usuarios[i].juegos.hangman.partidas + "</td><td>" + usuarios[i].juegos.hangman.victorias + "</td><td>" + usuarios[i].juegos.hangman.derrotas + "</td></tr>";

		tabla += "<tr><td>COLORS</td><td>" + usuarios[i].juegos.colors.puntos + "</td><td>" + usuarios[i].juegos.colors.partidas + "</td><td>" + usuarios[i].juegos.colors.aciertos + "</td><td>" + usuarios[i].juegos.colors.fallos + "</td></tr>";

		tabla += "<tr><td>Q-STORM</td><td>" + usuarios[i].juegos.qstorm.puntos + "</td><td>" + usuarios[i].juegos.qstorm.partidas + "</td><td>" + usuarios[i].juegos.qstorm.aciertos + "</td><td>" + usuarios[i].juegos.qstorm.fallos + "</td></tr>";
	}
	tabla += "</table>";

	//Imprimimos de una vez todo:
	
	document.getElementById("estadisticasUsuarios").innerHTML = tabla;
}