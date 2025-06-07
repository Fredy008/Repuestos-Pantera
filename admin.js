
document.getElementById("formulario-producto").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = parseInt(document.getElementById("precio").value);
  const imagen = document.getElementById("imagen").value;
  const nuevoProducto = { nombre, precio, imagen };
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));
  alert("Producto agregado correctamente.");
  this.reset();
});
