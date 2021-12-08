
/* DESAFIO 9 */
let cartaMenu = document.getElementById("cartaMenu");

cartaMenu.addEventListener('click', () => {
    console.log("Diste click")
});

class FormMensaje {
    constructor(nombre, apellido, mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mensaje = mensaje;
    }
}

let mensajes = [];

let fomulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mensaje = document.getElementById("mensaje").value;

    const Mensaje = new FormMensaje(nombre, apellido, mensaje);

    mensajes.push(Mensaje);
    formulario.reset();
    document.getElementById("agregarArrayMensajes").innerHTML = JSON.stringify(mensajes);
});


