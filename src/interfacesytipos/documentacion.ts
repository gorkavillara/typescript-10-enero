interface Persona {
    nombre: string
    edad: number
}

// interface Alumno {
//     nombre: string
//     edad: number
//     lenguajeFavorito: string
// }

// Herencia de interfaces
interface Alumno extends Persona {
    lenguajeFavorito: string
}

type Figura = {
    nombre: string,
    base: number,
    altura: number
}

type Triangulo = {
    nombre: "Triángulo" | "triángulo" | "triangulo"
}

// Intersecciones con type
type FiguraTriangulo = Figura & Triangulo

const miFiguraTriangulo: FiguraTriangulo = {
    nombre: "Triángulo",
    base: 10,
    altura: 5
}

// Interfaces on Tipos genéricos
interface Cliente<T, U> {
    email: T
    telefono: U
}

const miCliente: Cliente<string, number> = {
    email: "cliente@cliente.com",
    telefono: 3216548415
}