/* Proyecto Avanzado: Voy a comenzar con la carga de los productos de la carta*/

// SUPUESTO EN QUE SEA YO LA QUE CARGUE LAS MESAS

const contenedorMesas = document.getElementById("contenedor-Mesas");

const contenedorMesa = document.getElementById("mesa-Contenedor");

mostrarMesas (misMesas);

function mostrarMesas(array) {
  
  array.forEach(misMesas => {
    let div = document.createElement("div");

    //ME MOSTRABA EL MISMO MODAL EN TODAS LAS MESAS. Por eso le saque el modal y primero
    //voy a intentar cargar al HTML, y luego analizo como cargar a las mesas que vaya 
    //eligiendo

    div.innerHTML += `<button id="boton${misMesas.id}" 
    type="button" 
    class="botonMesas"><img src="./assets/mesa-de-cafe.png" alt="mesa" width="70px" 
    height="70px"></button>
    </div>`

    contenedorMesas.appendChild(div);

    let boton = document.getElementById(`boton${misMesas.id}`)

    boton.addEventListener(`click`, () => {
      console.log(`boton${misMesas.id}`)
    })
  })
}


//CASO EN QUE SEA YO LA QUE CARGUE TODOS LOS PRODUCTOS QUE EL CLIENTE de mi aplicacion
// VA A TENER EN LA PAGINA/ APLICACION
// En este supuesto hice un array de productos/platos/menu y los cargue en forma manual
// Luego muestro en la pagina, en el HTML, en forma de cards

const contenedorMenu = document.getElementById("contenedor-Menu");

mostrarMenu(stockMenu);

function mostrarMenu(array) {
  // console.log(array);
  array.forEach(menu => {
    let div = document.createElement("div");

    div.innerHTML += `<div class="card" style="width: 18rem; margin: 3rem;">
        <img src=${menu.img} style="width: 100px; height:100px;">
        <div class="card-body">
          <h5 class="card-title">${menu.nombre}</h5>
          <p class="card-text">Precio: $${menu.precio}</p>
          <p class="card-text">Descripcion: ${menu.desc}</p>
          <p class="card-text">Pedido Especial del cliente</p>
          <p class="card-text">stock: ${menu.stock}</p>
          <a id= "botonAgregar${menu.id}" href="#" class="btn btn-primary">Agregar</a>
        </div>
      </div>
    </div>

  </div>`

    contenedorMenu.appendChild(div);

    let botonAgregar = document.getElementById(`botonAgregar${menu.id}`)

    botonAgregar.addEventListener(`click`, () => {
      agregarALaMesa(menu.id)
    })
  });
}

//La idea es despues agregar a la mesa que elija. Por ahora agrega al HTML

function agregarALaMesa(id) {
  let menuAgregar = stockMenu.find(elemento => elemento.id === id);
  let div = document.createElement("div");
  div.style.cssText = "display:flex;width:50%; justify-content: space-between;"
  div.innerHTML = `<p>id: ${menuAgregar.id}</p>
                    <p>${menuAgregar.nombre}</p>
                    <p>${menuAgregar.precio}</p>`
  contenedorMesa.appendChild(div);
}

//SUPUESTO EN QUE SEA EL CLIENTE EL QUE CARGUE LOS PRODUCTOS
// Es una buena opcion para no me llame cada vez que quiera agregar productos a la carta
// Cree una clase producto
/*NOTA PARA EL TUTOR: Lo que noto es que los productos no quedan cargados, cuando cierro
la pagina y la vuelvo a abrir tengo que cargarlos nuevamente, esa no seria la idea. VER COMO
PUEDO HACER*/

class producto {
  constructor(nombre, descripcion, precio, stock, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
}

//Array donde se van a acumular los productos que cargue el cliente
let productos = [];

//Boton que me permite mostrar los productos cargados en forma dinamica desde js
let botonProductos = document.getElementById("botonProductos");

//Donde el usuario de mi aplicacion va a ver los productos que cargo con el formulario
let divProductos = document.getElementById("divProductos");

//Formulario donde el cliente que ocupa mi aplicacion va a cargar las caracteristicas de los productos
let formProductos = document.getElementById("formProductos");

//Para que aparezca un  mensaje pidiendo al usuario que no presione el boton nuevamente
//porque los productos ya estan cargados
let mensajeAmigable = document.getElementById("mensajeAmigable");

formProductos.addEventListener('submit', (e) => {
  console.log("ghhgsgsghss")
  e.preventDefault();
  let datForm = new FormData(e.target);
  let nuevoProd = new producto(datForm.get("nombre"), datForm.get("descripcion"), datForm.get("precio"), datForm.get("stock"), datForm.get("imagen"));
  productos.push(nuevoProd);
  localStorage.setItem('keyProductos', JSON.stringify(productos));
  formProductos.reset()
})

botonProductos.addEventListener('click', () => {
  let productosEnStorage = JSON.parse(localStorage.getItem('keyProductos'));
  if (divProductos.children.length == 0) {
    productosEnStorage.forEach((productosEnArray, indice) => {
      divProductos.innerHTML += `<div class="card"; id= "producto ${indice}"; style="width: 18rem; margin: 3rem;">
      <div class="card-body">
        <h5 class="card-title">${productosEnArray.nombre}</h5>
        <p class="card-text">Precio: $${productosEnArray.precio}</p>
        <p class="card-text">Descripcion: ${productosEnArray.descripcion}</p>
        <p class="card-text">Pedido Especial del cliente</p>
        <p class="card-text">Stock: ${productosEnArray.stock}</p>
        <a id= "boton${indice}" href="#" class="btn btn-primary">Agregar</a>
      </div>
  
  </div>`
    })
  } else {
    mensajeAmigable.innerHTML = "Por favor no haga click en el boton porque los productos ya estan cargados"
  }
  
})
