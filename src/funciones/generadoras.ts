// Funciones generadoras
function* generaId() {
    let id = 0
    while(true) {
        yield id
        id++
        if (id > 5) return id
    }
}

const genId = generaId()
console.log(genId.next()) // { value: 0, done: false }
console.log(genId.next()) // { value: 1, done: false }
console.log(genId.next()) // { value: 2, done: false }
console.log(genId.next()) // { value: 3, done: false }
console.log(genId.next()) // { value: 4, done: false }
console.log(genId.next()) // { value: 5, done: false }
console.log(genId.next()) // { value: 6, done: true }
console.log(genId.next()) // { value: undefined, done: true }