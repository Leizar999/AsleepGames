var contador = 1;
var pregunta = "";
var pattern = "AEIORUM";
var usadas = "";
var repeat = -1;
var modo = "normal";
var indice = sessionStorage.getItem("user");
var usuarios = JSON.parse(localStorage.getItem("users")); //Nos traemos a todos los usuarios.
var puntosHang = usuarios[indice].juegos.hangman.puntos;
var nombre = usuarios[indice].nombre; //usuarios[indice].juegos.colors.puntos += puntosColores;
var partidasHang = usuarios[indice].juegos.hangman.partidas;
var victoriasHang = usuarios[indice].juegos.hangman.victorias;
var derrotasHang = usuarios[indice].juegos.hangman.derrotas;

//alert(puntosHang);

//Función para cambiar de imagen cuando el usuario falle:

function cambiarImagen() {
    contador++;
    document.getElementById("imgHang").src = "./img/hang" + contador + ".png";
}

//Función que carga todas las preguntas:

function preguntas() {
    var opc = 0;

    document.getElementById("question").innerHTML = "P R E G U N T A";

    do{
        opc = parseInt(prompt("Elige opción: 1. Fácil - 2.Normal", 1));
    }while(opc != 1 && opc != 2);

    if(opc == 1){
        pattern = "AEIORUM";
    }else{
        pattern = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    }

    //Añadimos todas las palabras en un array:

    var random, qrandom;
    var preguntas = [];
    preguntas[0] = "A L I G A T O R";
    preguntas[1] = "M U R C I E L A G O";
    preguntas[2] = "H A R L E M";
    preguntas[3] = "T R I N I T R O T O L U E N O";
    preguntas[4] = "R A D I A D O R";
    preguntas[5] = "E X A B R U P T O";
    preguntas[6] = "A R C A D I A";
    preguntas[7] = "R A P T U R E";
    preguntas[8] = "A S T R I N G E N T E";
    preguntas[9] = "A S T E R I S C O";
    preguntas[10] = "T E C L A D O";
    preguntas[11] = "P R O Y E C T O R";
    preguntas[12] = "P A N F L E T O";
    preguntas[13] = "E N T E N D I M I E N T O";
    preguntas[14] = "P E R S I A N A";
    preguntas[15] = "R U B E N A S O";
    preguntas[16] = "I C E B E R G";
    preguntas[17] = "P E Y O R A T I V O";
    preguntas[18] = "M I S A N T R O P I A";
    preguntas[19] = "H I P O F I S I S";
    preguntas[20] = "H I P O T A L A M O";
    preguntas[21] = "V E N T R I C U L O";
    preguntas[22] = "E S C L E R O S I S";
    preguntas[23] = "N E C R O S I S";
    preguntas[24] = "I S Q U E M I A";
    preguntas[25] = "F I L A N T R O P I A";
    preguntas[26] = "E P I L E P S I A";
    preguntas[27] = "S U D O K U";
    preguntas[28] = "C A S T U O";
    preguntas[29] = "A U R I C U L A R E S";
    preguntas[30] = "I N C E N D I O";
    preguntas[31] = "B O M B A";
    preguntas[32] = "B A R B A";
    preguntas[33] = "P I S A P A P E L E S";
    preguntas[34] = "C A N C I O N";
    preguntas[35] = "H A B L A R";
    preguntas[36] = "P A L I N D R O M O";
    preguntas[37] = "P A G I N A";
    preguntas[38] = "E S T R O P A J O";
    preguntas[39] = "E S T O M A G O";
    preguntas[40] = "T O R T I L L A";
    preguntas[41] = "C A C E R E Ñ O";
    preguntas[42] = "A T M O S F E R A";
    preguntas[43] = "E S C A R P I N";
    preguntas[44] = "A L T A V O Z";
    preguntas[45] = "E S C U C H A R";
    preguntas[46] = "V I A J A R";
    preguntas[47] = "E V A L U A R";
    preguntas[48] = "A P R O B A R";
    preguntas[49] = "M E T A M O R F O S I S";
    preguntas[50] = "A L C A H U E T E";
    preguntas[51] = "O R D E N A R";
    preguntas[52] = "E N C U A D E R N A R";
    preguntas[53] = "E S T R A T O S F E R A";
    preguntas[54] = "Q U E S O";
    preguntas[55] = "E X E C R A B L E";
    preguntas[56] = "E S C E N A R I O";
    preguntas[57] = "B L A N C U Z C O";
    preguntas[58] = "P E S C U E Z O";
    preguntas[59] = "A P E R C I B I M I E N T O";
    preguntas[59] = "D E S C O N E C T A R";
    preguntas[60] = "C L I E N T E";
    preguntas[61] = "D I S E Ñ O";
    preguntas[62] = "D E S P L I E G U E";
    preguntas[63] = "E M B E S T I D A";
    preguntas[64] = "E F E M E R I D E";
    preguntas[65] = "E S C A B U L L I R S E";
    preguntas[66] = "F E H A C I E N T E";
    preguntas[67] = "G R A G E A";
    preguntas[68] = "G R A Z N I D O";
    preguntas[69] = "E R R O R";
    preguntas[70] = "H O R R O R";
    preguntas[71] = "G R A N I Z O";
    preguntas[72] = "H A B I C H U E L A";
    preguntas[73] = "H A C H A Z O";
    preguntas[74] = "G O L P E";
    preguntas[75] = "E S F I N G E";
    preguntas[76] = "D U C H A";
    preguntas[77] = "T I M B R E";
    preguntas[78] = "T E M B L O R O S O";
    preguntas[79] = "T I E M P O";
    preguntas[80] = "H A B L A D U R I A";
    preguntas[81] = "H A M B R U N A";
    preguntas[82] = "H E D I O N D O";
    preguntas[83] = "N O R T E Ñ O";
    preguntas[84] = "M U R G A Ñ O";
    preguntas[85] = "A N G L I C I S M O";
    preguntas[86] = "H E C A T O M B E";
    preguntas[87] = "A R M A R I O";
    preguntas[88] = "B A T A M A N T A";
    preguntas[89] = "H E R M E T I C O";
    preguntas[90] = "H E R R A M I E N T A";
    preguntas[91] = "H E T E R E O G E N E O";
    preguntas[92] = "H I E L";
    preguntas[93] = "H I E N A";
    preguntas[94] = "I M P E R T I N E N T E";
    preguntas[95] = "I M P O S I C I O N";
    preguntas[96] = "R I O";
    preguntas[97] = "I N C O R R E G I B L E";
    preguntas[98] = "D I A R R E A";
    preguntas[99] = "I M P R E S O R A";
    preguntas[100] = "M O C H I L A";

    //Con un random, seleccionamos la posición para la pregunta, del 1 al 100:

    random = Math.floor(Math.random() * 100) + 1;
    qrandom = eval("preguntas[" + random + "]");

    //Con eval, cargamos el patrón con el que mediante expresión regular reemplazamos las letras por guión bajo ( _ ):

    var qrandomHidden = qrandom.replace(eval("/[" + pattern + "]/gi"), " _ "); 
    document.getElementById("question").innerHTML = qrandomHidden;
    pregunta = qrandom;
}

//Evaluamos la pregunta obtenida:

function evaluarPregunta() {
    var valor = document.getElementById("letra").value.toUpperCase();

    if (valor.search(/^[a-zA-Z]*$/)){ //No permitimos caracteres que no sean letras.
        alert ('Carácter no válido');
    }else if(usadas.indexOf(valor) == -1){
        usadas = usadas + " " + valor; // Vamos mostrando las usadas.
        var qrandomHidden = pregunta;
        if (pregunta.indexOf(valor) == -1) {
            cambiarImagen();
        }else if (valor != "") {
            pattern = pattern.replace(valor, "");
            qrandomHidden = qrandomHidden.replace(eval("/[" + pattern + "]/gi"), " _ ");
            document.getElementById("question").innerHTML = qrandomHidden;
            repeat = repetido(qrandomHidden);
            puntosHang += repeat;
            //alert(puntosHang);
        }
    }else{
        alert("El valor introducido ya existe!"); // alertamos al usuario si el valor ya se ha introducido.
    }

    document.getElementById("letra").value = "";
    document.getElementById("todonada").value = "";

// Si el contador llega a 7 que son las fases que tiene para que salga el muñeco, habrá perdido, si no habrá ganado:

    if (contador == 7 || repeat == 0) {
        if (repeat == 0) {
            setAtributos(puntosHang, partidasHang += 1, victoriasHang += 1, derrotasHang);
            document.getElementById("question").innerHTML = "HAS GANADO!";
        }else if(contador == 7){
            setAtributos(puntosHang,partidasHang += 1,victoriasHang, derrotasHang += 1);
            document.getElementById("question").innerHTML = pregunta;
        }

        localStorage.setItem("users",JSON.stringify(usuarios)); // Guardamos los datos en objeto JSON en string.
        setTimeout("recargar()", 3000);
    }
    document.getElementById("usadas").innerHTML = usadas;
}

//Permitimos al usuario introducir la palabra si cree que sabe la respuesta:

function todoNada(){
    var frase = document.getElementById("todonada").value.toUpperCase();
    if(frase == pregunta.replace(/\s/g,"")){
            setAtributos(puntosHang += 10, partidasHang += 1, victoriasHang += 1, derrotasHang);
            document.getElementById("question").innerHTML = "HAS GANADO!";
    }else{
        setAtributos(puntosHang -= 10, partidasHang += 1, victoriasHang, derrotasHang += 1);
        contador = 6;
        cambiarImagen();
        document.getElementById("question").innerHTML = pregunta;
    }
    localStorage.setItem("users",JSON.stringify(usuarios));
    setTimeout("recargar()", 3000);
}

//Función para recargar la página:

function recargar() {
    window.open("hangMan.html", "_self");
}

// Función que nos dice cuantas letras hay repetidas, para luego saber cuantas hay que mostrar:

function repetido(cadena) {
    var repeticion = 0;
    for (i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == "_") {
            repeticion++;
        }
    }
    return repeticion;
}

//Función que evalúa la tecla introducida desde el index, en este caso se utiliza el keyCode 13 que es la tecla Intro:

function evaluarIntro(e){
    if (e.keyCode == 13) {
        evaluarPregunta();
    }
}

//Igual que la aneterior pero que llama a la función todoNada que evalúa la frase introducida para ver si concuerda:

function evaluarIntro2(e){
    if (e.keyCode == 13) {
        todoNada();
    }
}

//Función que establece los datos en el objeto para luego poder guardalo nuevamente:

function setAtributos(puntos, partidas, victorias, derrotas){
    usuarios[indice].juegos.hangman.puntos = puntos;
    usuarios[indice].juegos.hangman.partidas = partidas;
    usuarios[indice].juegos.hangman.victorias = victorias;
    usuarios[indice].juegos.hangman.derrotas = derrotas;
}