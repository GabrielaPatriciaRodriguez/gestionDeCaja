/* Cree 2 clases -Clase mesa, que tiene una propiedad monto y un metodo para recargar el 10%
si es compra financiada- y -Clase Local Comercial, que tiene 2 propiedades, mesasHabilitadas
y totalRecaudacion, que en principio se encuentra en cero. Este Local comercial tiene un 
metodo recaudacionDia, que tiene un while, el iterador comienza en 1 representado a la mesa 1,
y la condicion es mientras que iterador sea menor o igual a mesasHabilitadas, ejecuta el codigo
que esta adentro, es decir manda un alert diciendo que se va a sumar el total de la mesa 1,
mesa 2, y asi sucesivamente, hasta el numero que le paso el usuario de mesas habilitadas.
luego le pregunta el monto de la mesa y si es compra en efectivo o 2 si es compra con tarjeta.
En este ultimo caso aplica el recargo del 10% llamando a ese metodo. Luego total recaudacion es 
la suma de totalRecaudacion y el monto de la mesa, i++ va sumando mesa a mesa, hasta que se 
cumple la condicion y tira un alert diciendo que el total de las mesas del dia es igual a 
totalRecaudacion y la cantidad de mesas habilitadas.
Posteriormente, creo una constante bar que es un nuevo objeto LocalComercial y pido que ingrese
la cantidad de mesas habilitadas, y este llama a la funcion recaudacionDia, iniciando asi
el simulador. */

// class Mesa {
//     constructor(id, monto) {
//         this.id = Number(id);
//         this.monto = monto;
//     }

//     /* Sumar recargo del 10% por compra financiada */
//     sumaRecargoDiez() {
//         this.monto = Math.round(this.monto * 1.10); 
//     }
// }

// class LocalComercial {
//     constructor() {
//         this.mesasHabilitadas = [];
//         this.totalRecaudacion = 0;
//     }

//     setearMesasHabilitadas() {
//         alert("Ingrese cantidad de mesas que tiene hoy por numero de mesas y totales");
//         let cantidadMesas = parseInt(prompt("Ingrese cantidad de mesas"));
//         for (let i = 1; i <= cantidadMesas; i++) {
//           let id = parseInt(prompt("Ingrese identificador numerico unico de la mesa"));  
//           let monto = parseFloat(prompt("Ingrese monto de la mesa"));
//           let mesa = new Mesa(id, monto);
//           this.mesasHabilitadas.push(mesa);
//         }
//     }
    
//     recaudacionDia() {
//        alert("Este metodo devuelve la recaudacion total de las mesas habilitadas");
//         let sumador = 0;
//        for(let i = 0; i < this.mesasHabilitadas.length; i++) {
//            this.totalRecaudacion = this.totalRecaudacion + this.mesasHabilitadas[i].monto;
//        } 
//        console.log(this.totalRecaudacion);

//        localStorage.setItem("recaudacion", JSON.stringify(this.mesasHabilitadas));

//        document.getElementById("mostrar").innerHTML = ("recaudacion", JSON.stringify(this.mesasHabilitadas) + "<br>" + "Total Recaudacion: $ " + this.totalRecaudacion);
//     }

//     ordenarArrayPorNumMesa(orden) {
//         let arrayOrdenado = [];
//         if (orden == 1) {
//             arrayOrdenado = [...this.mesasHabilitadas.sort((a, b) => a.id - b.id)]
//         } else { 
//             arrayOrdenado = [...this.mesasHabilitadas.sort((a, b) => b.id - a.id)]
//         }
//         return arrayOrdenado;
//     }

//     ordenarArrayPorMonto(orden) {
//         let arrayOrdenado2 = [];
//         if (orden == 1) {
//             arrayOrdenado2 = [...this.mesasHabilitadas.sort((a, b) => a.monto - b.monto)] 
//         } else { 
//             arrayOrdenado2 = [...this.mesasHabilitadas.sort((a, b) => b.monto - a.monto)]
//         }
//         return arrayOrdenado2;
//     }
// }

// const morena = new LocalComercial();
// morena.setearMesasHabilitadas();
// console.log(morena.mesasHabilitadas); // muestro el arreglo
// morena.recaudacionDia(); // ejecuto el metodo recaudacionDia

// const arregloAsc = morena.ordenarArrayPorNumMesa(1);
// console.log(arregloAsc) // muestro el arreglo ordenado ascendentemente 
// const arregloDesc = morena.ordenarArrayPorNumMesa(2);
// console.log(arregloDesc) // muestro el arreglo ordenado descendentemente

// const arregloAscMonto = morena.ordenarArrayPorMonto(1);
// console.log(arregloAscMonto) // muestro el arreglo ordenado ascendentemente 
// const arregloDescMonto = morena.ordenarArrayPorMonto(2);
// console.log(arregloDescMonto) // muestro el arreglo ordenado descendentemente


// /* Desafio 8 */

// let texto = "";

// const lista = ["getElementById()", "getElementClassName()", "getElementByTagName()"];

// lista.forEach(mostrarLista);

// document.getElementById("agregarArray").innerHTML = texto;

// function mostrarLista(item, index) {
//     texto += index + ": " + item + "<br>";
// }

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


