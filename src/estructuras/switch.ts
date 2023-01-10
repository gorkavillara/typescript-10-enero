// Sentencia SWITCH
interface Alumno {
    nombre: string
    nota: number
}

const alumno1: Alumno = {
    nombre: "Jesús",
    nota: 3
}

// const devuelveComentario = (alumno: Alumno) => {
//     let comentario: string
//     switch(alumno.nota) {
//         case 0: 
//             comentario = "Deja la switch"
//             break
//         case 1:
//             comentario = "Trabaja un poco más"
//             break
//         case 2:
//             comentario = "Casi apruebas"
//             break
//         case 3:
//             comentario = "Está decente, pero deberías estudiar más Typescript"
//             break
//         case 4:
//             comentario = "Buen trabajo"
//             break
//         case 5:
//             comentario = "Tómate un chupito a mi salud"
//             break
//         default:
//             comentario = "No has sacado ni nota, melón"
//             break
//     }
//     return comentario
// }

const devuelveComentario = (alumno: Alumno) => {
    switch(alumno.nota) {
        case 0:
            return "Deja la switch"
        case 1:
            return "Trabaja un poco más"
        case 2:
            return "Casi apruebas"
        case 3:
            return "Está decente, pero deberías estudiar más Typescript"
        case 4:
            return "Buen trabajo"
        case 5:
            return "Tómate un chupito a mi salud"
        default:
            return "No has sacado ni nota, melón"
    }
}
console.log(devuelveComentario(alumno1))