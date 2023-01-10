// Tipado de variables primitivas

// Tipado múltiple
let edad: number | string

// Tipado de objetos/arrays
// tipos / interfaces
type TPersona = {
    nombre: string,
    edad: number,
    isDeveloper: boolean,
    lenguajeFavorito?: string
}
interface IPersona {
    nombre: string
    edad: number
    isDeveloper: boolean
    lenguajeFavorito?: string
}

const persona: IPersona = {
    nombre: "Gorka",
    edad: 35,
    isDeveloper: true,
    lenguajeFavorito: "Typescript"
}

interface ICliente<T> {
    nombre: string
    direccion: string
    telefono: T
    email: string
}

const cliente1: ICliente<number> = {
    nombre: "",
    direccion: "",
    email: "",
    telefono: 123123
}

const personas: IPersona[] = []

const otraspersonas: Array<IPersona | string> = ["Gorka"]