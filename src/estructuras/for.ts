const nombres: string[] = ["Jesús", "Pablo", "Patri", "Paco", "Fran"]

// For típico de toda la vida
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// For ... of para ARRAYS
for (let nombre of nombres) {
    console.log(nombre)
}

interface Figura {
    nombre: string
    anchura: number
    altura: number
}

const figura: Figura = {
    nombre: "Rectángulo",
    anchura: 10,
    altura: 5
}

// For ... in para OBJETOS
for (let prop in figura) {
    console.log(prop)
    // console.log(figura[prop])
}

console.log(figura.nombre)
console.log(figura["nombre"])
