//Lista de productos con su id, nombre y precio

const productos = [{ id: 1, nombre: "Playo", precio: 450 },
{ id: 2, nombre: "Hondo", precio: 400 },
{ id: 3, nombre: "Cuenco" , precio: 150},
{ id: 4, nombre: "Aceitero" , precio: 250},
{ id: 5, nombre: "Servilletero" , precio: 150},
{ id: 6, nombre: "Posacuenco" , precio: 100}];

//Por cada elemento del objeto creado, integro en el HTML su nombre, precio y boton para agregar al carrito
for (const producto of productos) {
    $("#app").append(`<div>
    <input value="${producto.id}" type="hidden">
    <h4> Producto: ${producto.nombre}</h4>
    <img src="./img/${producto.id}.png" alt="">
    <b> $ ${producto.precio}</b>
    <button class="btnComprar">Agregar al carrito</button>
    <p style= "display: none"> Agregado, cliquee nuevamente para agregar mas productos</p>
    
</div>`);} 


//Asocio una funcion para el evento del click en los botones del elemento generado arriba

$(document).ready(function () {
$(".btnComprar").click(function (e) {
let hijos = $(e.target).parent().children();
console.log(hijos[0].value);

//Animo la respuesta al click a traves de una animacion concatenada para darle a entender al usuario que fue captado su accion
$(e.target).parent().fadeOut("slow")
.css("color", "green")
.fadeIn("fast")
$(e.target).parent().children(5).show()
});
});


