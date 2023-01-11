const miEvento: Event = new Event("mievento")
const heading: HTMLHeadingElement = document.querySelector("h1")!

const alertButton: HTMLButtonElement = document.querySelector("button#boton-alerta")!
alertButton.addEventListener("click", () => {
    heading.dispatchEvent(miEvento)
})

heading.addEventListener("mievento", () => {
    heading.style.color = "blue"
    heading.style.fontSize = "4rem"
})