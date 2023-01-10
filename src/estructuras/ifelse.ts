// Sentencias IF-ELSE
const devuelveTipo = (variable: any) => {
    let tipo: string

    if (typeof variable === "string") {
        tipo = "string"
    } else if (typeof variable === "number") {
        tipo = "number"
    } else {
        tipo = "boolean"
    }

    return tipo
}

console.log(devuelveTipo(null))

// Cláusulas guarda (guard clauses)
const suma = (a: any, b: any) => {
    // if (typeof a === "number") {
    //     if (typeof b === "number") {
    //         return a + b
    //     }
    //     throw new Error()
    // }
    // throw new Error()
    if (typeof a !== "number" || typeof b !== "number") return null

    return a + b
}

// Return implícito de las funciones tipo flecha
const multiplica = (a: number, b: number): number => a * b