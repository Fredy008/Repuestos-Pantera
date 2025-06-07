
const productosDefault = [
  { nombre: "Placa GTX 1660", precio: 120000, imagen: "img/gpu1660.jpg" },
  { nombre: "RAM 8GB DDR4", precio: 25000, imagen: "img/ram8gb.jpg" },
  { nombre: "SSD 240GB", precio: 18000, imagen: "img/ssd240.jpg" },
  { nombre: "Gabinete Gamer RGB", precio: 50000, imagen: "img/gabinete.jpg" },
  { nombre: "Mouse Gamer Óptico", precio: 15000, imagen: "img/mouse.jpg" },
  { nombre: "Parlantes Stereo USB", precio: 12000, imagen: "img/parlantes.jpg" },
  { nombre: "Webcam HD 1080p", precio: 20000, imagen: "img/camara.jpg" },
  { nombre: "Micrófono USB Condensador", precio: 30000, imagen: "img/microfono.jpg" }
];

const productos = JSON.parse(localStorage.getItem("productos")) || productosDefault;
localStorage.setItem("productos", JSON.stringify(productos));

if (document.getElementById("productos")) {
  const contenedor = document.getElementById("productos");
  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `<img src="${p.imagen}" alt="${p.nombre}">
                     <h3>${p.nombre}</h3>
                     <p>Precio: $${p.precio}</p>
                     <button onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Agregar al carrito</button>`;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(nombre, precio) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

if (document.getElementById("carrito-lista")) {
  const lista = document.getElementById("carrito-lista");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
    total += p.precio;
  });
  document.getElementById("total").textContent = `Total: $${total}`;
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  location.reload();
}
