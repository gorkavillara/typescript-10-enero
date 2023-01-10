const tiposVariablesPrimitivos = ["number", "string", "boolean"]
const object = {
    nombre: "hola",
    edad: 12,
    isDeveloper: true
}

// Ejemplo de tipado INFERIDO
const saludo = "Hola mundo"
console.log(typeof saludo)

// Ejemplo de tipado FUERTE
let despedida: string
despedida = "Adiós"
console.log(typeof despedida)

let puntuacion: number

// MUCHO CÓDIGO
/////////
/////////
/////////

function doblaPuntuacion(puntos: number) {
    return 2 * puntos
}

function suma(a: number, b: number) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Los dos parámetros deben ser de tipo number")
    // return +a + +b
    return Number(a) + Number(b)
}

console.log(suma(1, 3))
console.log(suma(12, 21))

// console.log(suma(1, "3"))

type TToggle = boolean
const toggleButton: TToggle = true
// const toggleButton: boolean = true