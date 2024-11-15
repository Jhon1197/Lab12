let contraseñacorrecta= "miContraseña123";
let contraseñaIngresada;

do {
    contraseñaIngresada = prompt ("Por Favor, Ingresa tu Contraseña");
    if (contraseñaIngresada != contraseñacorrecta){
        alert("contraseña incorrecta. Intentalo de nuevo")
    }
}while (contraseñaIngresada !== contraseñacorrecta);
alert("Contraseña Correcta.");
