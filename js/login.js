//Comprobamos si existe el objeto, si no, se crea uno nuevo:

if(localStorage.getItem("users") !== null){
    usuarios = JSON.parse(localStorage.getItem("users"));
}else{
    var usuarios = [];
}
//Creamos la función de datos de usuario, donde metemos todos datos que vamos a necesitar:

function datosUsuario() {

    nombre = document.getElementById("nombre").value;
    pass = document.getElementById("password").value;
    email = document.getElementById("email").value;

    usuarios.push({
        nombre: nombre,
        password: pass,
        mail: email,
        juegos: {
            hangman: {
                puntos: 0,
                partidas: 0,
                victorias: 0,
                derrotas: 0
            },
            colors: {
                puntos: 0,
                partidas: 0,
                aciertos: 0,
                fallos: 0
            },
            qstorm: {
                puntos: 0,
                partidas: 0,
                aciertos: 0,
                fallos: 0
            }
        }
    });

    alert(JSON.stringify(usuarios));

    localStorage.setItem("users", JSON.stringify(usuarios)); //Creamos la sesión con clave - valor y lo pasamos a string JSON.
}

//Comrobamos los datos para iniciar sesión en el login:

function comprobarDatos() {
    var encontrado = false;
    for(var i = 0; i < usuarios.length; i++){
        if(usuarios[i].nombre == document.getElementById("username").value && usuarios[i].password == document.getElementById("password").value && !encontrado){
            sessionStorage.setItem("user", i); //Guardamos el índice, para luego acceder al objeto y sus propiedades en sesión.
            encontrado = true;
        }
    }
    if(!encontrado){
        alert("Valores incorrectos!");
    }
}

//Cargamos los datos en las páginas donde se requiera, almacenando el objeto en sessionStorage desde localStorage:

function cargarSesion(){

    if(sessionStorage.getItem("user") !== null && localStorage.getItem("users") !== null){
        var indice = sessionStorage.getItem("user");
        var nombre = JSON.parse(localStorage.getItem("users"))[indice].nombre;
        document.getElementById("datosLogin").innerHTML = "Bienvenido " + nombre + " a ASLEEP GAMES!";
    }else{
        document.getElementById("datosLogin").innerHTML = "Bienvenido usuario a ASLEEP GAMES! Haz login o regístrate!";
    }
}