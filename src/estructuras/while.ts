const alturas: number[] = [1.98, 1.88, 1.89, 1.70, 1.68, 1.79]

let condicion: boolean = true
let i: number = 0
while(condicion) {
    // Se va a ejecutar siempre que la condicion = true
    if (alturas[i] < 1.70) {
        condicion = false
        console.log(alturas[i])
    }
    i++
}

let suma: number = 30
do {
    // Se ejecuta siempre antes de comprobar la condición
    suma++
} while(suma < 10)
console.log(suma)

let sumaW: number = 30
while(sumaW < 10) {
    sumaW++
}
console.log(sumaW)
