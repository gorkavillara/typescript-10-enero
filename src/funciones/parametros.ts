// Funciones tipo flecha
const suma = (a: number, b: number) => a + b
console.log(suma(4, 9))

// Con los tipos de variables primitivos el paso de funciones es POR VALOR
let numero: number = 10
function cambiaNumero(numero: number) {
    numero = 20
    return numero
}
cambiaNumero(numero)
console.log(numero) // 10

let opcion: boolean = false
function toggle(opcion: boolean) {
    opcion = !opcion
}
toggle(opcion)
console.log(opcion) // false

// Con las variables "object" (Objetos y Arrays), el paso de funciones es POR REFERENCIA
interface Coche {
    marca: string
    modelo: string
}
interface Persona {
    nombre: string
    telefono: number
    coche?: Coche
}
const persona: Persona = {
    nombre: "Rick",
    telefono: 123456789
}
function cambiaNombre(pers: Persona) {
    pers.nombre = "Morty"
}
cambiaNombre(persona)
console.log(persona.nombre) // Morty

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function cambiaPrimerNumero(nums: number[]) {
    nums[0] = 99
}
cambiaPrimerNumero(numeros)
console.log(numeros) // [99, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Copias de objetos / arrays
// const copiaPersona: Persona = { ...persona } // Copia superficial?
const copiaPersona: Persona = Object.assign(persona) // Copia superficial

persona.coche = {
    marca: "Tesla",
    modelo: "Model X"
}

console.log(copiaPersona)

// Primero convertirlo en string
const stringCopiaProfunda: string = JSON.stringify(persona)
console.log(stringCopiaProfunda)
// Después convertirlo en objeto de nuevo
const copiaProfunda: Persona = JSON.parse(JSON.stringify(persona))
console.log(copiaProfunda)





const nuevaPersona: Persona = {
    nombre: "Jesús",
    telefono: 321654987,
    coche: {
        marca: "Ford",
        modelo: "Focus"
    }
}

console.log(nuevaPersona)

const copiaNuevaPersona: Persona = { ...nuevaPersona } // Copia profunda
// const copiaNuevaPersona: Persona = Object.assign(nuevaPersona) // Copia superficial

console.log(copiaNuevaPersona)

nuevaPersona.telefono = 555555555
nuevaPersona.coche = {
    marca: "Tesla",
    modelo: "Model X"
}
console.log(nuevaPersona)

console.log(copiaNuevaPersona)
