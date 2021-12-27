//Logica del negocio:

//Funciones:

//Respecto al Menu necesito obtener el producto- Lo hago a traves de su id, con el metodo find
//que me retorna el primer elemento que coincida con el id que le paso

function obtenerProducto(idProducto) {
  let producto = stockMenu.find((producto) => producto.id == idProducto);
  return producto;
}

//La Caja es un objeto que tendra propiedades: Total y un array de productos:

let caja = {
  total: 0,
  productos: [],
};

//Funcion para agregar a la caja productos:

function agregarALaCaja(producto) {
  //Si existe en productos, suma 1 a la cantidad
  //Si no existe en productos lo agrega
  let productoEnCaja = caja.productos.find(
    (productoEnCaja) => productoEnCaja.id == producto.id
  );
  if (productoEnCaja) {
    productoEnCaja.cantidad += 1;
  } else {
    caja.productos.push({
      ...producto,
      cantidad: 1
    });
  }
  actualizarTotal();
  renderizarCaja();
  guardarEnLocalStorage();
}

//Actualizar el total de la caja:

function actualizarTotal() {
  caja.total = 0;
  caja.productos.forEach(
    (producto) => (caja.total += producto.precio * producto.cantidad)
  );
}

//Para dejar la caja en cero:

function resetearCaja() {
  caja = {
    total: 0,
    productos: [],
  };
}

//Para cobrar y que al final de un alert con un mensaje

let botonCobrar = document.getElementById("cobrar");

botonCobrar.addEventListener("click", () => {
  alert(`Su compra da un total de $ ${caja.total}`);
  resetearCaja();
  guardarEnLocalStorage();
  renderizarCaja();
});

//Funcion eliminar un producto de la caja

function eliminarItem(id) {
  const index = caja.productos.findIndex((elemento) => elemento.id === id);
  if (caja.productos[index].cantidad > 1) {
    caja.productos[index].cantidad -= 1;
  } else {
    caja.productos = caja.productos.filter((elemento) => elemento.id !== id);
  }
  actualizarTotal();
}

//CARGUE TODOS LOS PRODUCTOS en un archivo json (menu.json)
// Luego muestro en la pagina, en el HTML, en forma de cards

const contenedorMenu = document.getElementById("contenedorMenu");

let stockMenu = [];

function crearCardProducto(menu) {
  let div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML += `<div class="card" style="width: 18rem; margin: 3rem;">
        <img src=${menu.img} style="width: 18rem; height:200px;">
        <div class="card-body">
          <h5 class="card-title">${menu.nombre}</h5>
          <p class="card-text">Precio: $${menu.precio}</p>
          <p class="card-text">Descripcion: ${menu.desc}</p>
          <p class="card-text">Pedido Especial del cliente</p>
          <p class="card-text">stock: ${menu.stock}</p>
          <a id="item-${menu.id}" href="#" class="btn btn-primary">Agregar</a>
        </div>
      </div>`;
  return div;
}

//Funcion para mostrar la carta (productos) en el html

function renderizarMenu() {
  stockMenu.forEach((menu) => {
    const div = crearCardProducto(menu);
    contenedorMenu.appendChild(div);
  });
}

//Funcion que me permite mostrar la caja con los productos que voy cargando:

function renderizarCaja() {
  const contenedorCaja = document.getElementById("contenedorCaja");
  contenedorCaja.remove();
  const table = document.getElementById("table");
  const tbody = document.createElement("tbody");
  tbody.id = "contenedorCaja";
  table.appendChild(tbody);
  const contenedor = document.getElementById("contenedorCaja");

  caja.productos.forEach((producto) => {
    let tr = document.createElement("tr");
    let id = "caja-" + producto.id;
    tr.innerHTML = `<th scope="row">${producto.id}</th>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td><button id="${id}">Eliminar</button></td>`;
    contenedor.appendChild(tr);

    let botonEliminar = document.getElementById(id);
    botonEliminar.addEventListener("click", (e) => {
      let id = e.target.id;
      //eliminamos caja- del id
      id = Number(id.replace("caja-", ""));
      eliminarItem(id);
      renderizarCaja();
      guardarEnLocalStorage();
    });
  });

  const mostrarTotal = document.getElementById("mostrarTotal");
  mostrarTotal.innerText = caja.total;
}

//Asignar funciones a Eventos

function asignarEventos() {
  stockMenu.forEach((producto) => {
    let card = document.getElementById("item-" + producto.id);
    card.addEventListener("click", () => {
      agregarALaCaja(producto);
    });
  });
}

//ajax
$.getJSON("menu.json", function (data) {
  data.forEach((elemento) => {
    stockMenu.push(elemento);
  });
  recuperarDeLocalStorage();
  renderizarCaja();
  renderizarMenu();
  asignarEventos();
});

function guardarEnLocalStorage() {
  localStorage.setItem("caja", JSON.stringify(caja));
}

function recuperarDeLocalStorage() {
  caja = JSON.parse(localStorage.getItem("caja"));
}