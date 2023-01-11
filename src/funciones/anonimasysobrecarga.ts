const numeros: number[] = [1, 2, 3]
const obtenElDoble = (num: number) => 2 * num

const dobleNumeros: number[] = numeros.map(obtenElDoble)

console.log(dobleNumeros)


const suma = (...args: Array<boolean | number>) => {
    return args.reduce((acumulado: number, argumento: any) => {
        return typeof argumento === "number" ? acumulado + argumento : acumulado
    }, 0)
}

console.log(suma(1, 4, true, 9, false, 90))