"use strict";
let carrito = {
    productos: [],
    total: 0
};
const productButtons = document.querySelectorAll("button#product-button");
productButtons.forEach((button) => {
    button.onclick = (event) => {
        // const btn = event.target
        const productName = button.getAttribute("data-product");
        const productPrice = Number(button.getAttribute("data-price"));
        carrito.productos = [...carrito.productos, {
                nombre: productName,
                precio: productPrice
            }];
        carrito.total += productPrice;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        checkCarrito();
    };
});
const olProductos = document.querySelector("ol#productos-carrito");
const spanTotal = document.querySelector("span#total");
const checkCarrito = () => {
    const localCarrito = localStorage.getItem("carrito");
    if (localCarrito === null)
        return;
    const jsonCarrito = JSON.parse(localCarrito);
    carrito = jsonCarrito;
    // Por cada producto => creamos un li
    olProductos.innerHTML = "";
    jsonCarrito.productos.forEach((producto) => {
        const nuevoLi = document.createElement("li");
        nuevoLi.innerText = `${producto.nombre} - ${producto.precio}€`;
        olProductos.appendChild(nuevoLi);
    });
    // Con el total, actualizamos el span
    spanTotal.innerText = `Total: ${jsonCarrito.total}€`;
};
checkCarrito();
