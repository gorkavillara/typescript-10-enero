interface Alumno {
    nombre: string
    nota: number
    isDeveloper: boolean
}

const alumnos: Alumno[] = [
    {
        nombre: "Gorka",
        nota: 1,
        isDeveloper: false
    },{
        nombre: "Patri",
        nota: 5,
        isDeveloper: true
    },{
        nombre: "Fran",
        nota: 4,
        isDeveloper: true
    }
]

// Métodos de arrays
// forEach -> Hace un loop a través de todos los elementos del array
alumnos.forEach((valor: Alumno, index: number, todos: Alumno[]) => {
    console.log(valor.nombre)
    console.log(index)
    console.log(todos.length)
})

// map -> Devuelve un array del mismo tamaño que el original
const nuevoArray: any[] = alumnos.map((alumno: Alumno) => ({ 
    ...alumno, 
    dobleNota: alumno.nota * 2 
}))
    // return { nombre: alumno.nombre, dobleNota: alumno.nota * 2 }
// })

console.log(alumnos)
console.log(nuevoArray)

// filter -> Devuelve un array con los elementos que devuelvan true en el callback
const alumnosAprobados: Alumno[] = alumnos.filter((alumno: Alumno) => {
    return alumno.nota > 2
})
console.log(alumnosAprobados)

// sort -> Devuelve un array del mismo tamaño que el original ordenado en base al criterio definido
// -1: "a" antes de "b"
//  0: mantiene el mismo orden
//  1: "b" antes de "a"
const alumnosOrdenados: Alumno[] = alumnos.sort((a: Alumno, b: Alumno) => {
    if (a.nota > b.nota) return -1
    return 1
})
// reverse -> invierte el orden
console.log(alumnosOrdenados.reverse())

// some -> Detecta si hay alguno de los elementos que cumpla la condición
const haSuspendidoAlguien: boolean = alumnos.some(
    (alumno: Alumno) => alumno.nota < 3
)
console.log(haSuspendidoAlguien)

// every -> Detecta si TODOS cumplen la condición
const hanAprobadoTodos: boolean = alumnos.every(
    (alumno: Alumno) => alumno.nota > 2
)
console.log(hanAprobadoTodos)

// find -> Encuentra el primer elemento que cumpla la condición
const alumnoSuspendido: Alumno | undefined = alumnos.find(
    (alumno: Alumno) => alumno.nota < 3
)
console.log(alumnoSuspendido)

// reduce -> Reducir a un sólo valor un array
const sumaTodasNotas: number = alumnos.reduce(
    (acum: number, alumno: Alumno) => {
        return acum + alumno.nota
    },
    0
)
console.log(sumaTodasNotas)

// includes -> arrays básicos
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.includes(3))
