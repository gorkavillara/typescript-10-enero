interface Producto {
    nombre: string
    precio: number
}
interface Carrito {
    productos: Producto[],
    total: number
}

let carrito: Carrito = {
    productos: [],
    total: 0
}
const productButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button#product-button")!

productButtons.forEach((button: HTMLButtonElement) => {
    button.onclick = (event: MouseEvent) => {
        // const btn = event.target
        const productName: string = button.getAttribute("data-product")!
        const productPrice: number = Number(button.getAttribute("data-price"))
        carrito.productos = [...carrito.productos, {
            nombre: productName,
            precio: productPrice
        }]
        carrito.total += productPrice
        localStorage.setItem("carrito", JSON.stringify(carrito))
        checkCarrito()
    }
})

const olProductos: HTMLOListElement = document.querySelector("ol#productos-carrito")!
const spanTotal: HTMLSpanElement = document.querySelector("span#total")!
const checkCarrito = () => {
    const localCarrito: string | null = localStorage.getItem("carrito")
    if (localCarrito === null) return

    const jsonCarrito: Carrito = JSON.parse(localCarrito)
    carrito = jsonCarrito
    // Por cada producto => creamos un li
    olProductos.innerHTML = ""
    jsonCarrito.productos.forEach((producto: Producto) => {
        const nuevoLi: HTMLLIElement = document.createElement("li")
        nuevoLi.innerText = `${producto.nombre} - ${producto.precio}€`
        olProductos.appendChild(nuevoLi)
    })
    // Con el total, actualizamos el span
    spanTotal.innerText = `Total: ${jsonCarrito.total}€`
}

checkCarrito()