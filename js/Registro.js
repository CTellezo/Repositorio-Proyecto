function obtenerDatosUsuario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var sexo = document.getElementById("sexo").value;
    var instrumento = document.getElementById("Instrumento").value;
    var  correo= document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
  
    return [nombre, apellido, sexo, instrumento, correo, contraseña];
}
function mostrarDatosEnConsola(datos) {
    console.log("Nombre: " + datos[0]);
    console.log("Apellido: " + datos[1]);
    console.log("Sexo: " + datos[2]);
    console.log("Instrumento: " + datos[3]);
    console.log("Correo: " + datos[4]);
    console.log("Contraseña: " + datos[5]);
}

function obtenerYMostrarDatos() {
    var datos = obtenerDatosUsuario();
    mostrarDatosEnConsola(datos);
}

