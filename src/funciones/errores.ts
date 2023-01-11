const ruletaRusaTypescript = () => {
    const num: number = Math.random() * 100
    console.log(num)

    if (num > 50) return console.log(" ✅Success!")
    // Lanzar un error
    // return console.error("❌ Error")
    throw new Error("Error: El número es menor que 50")
}

try {
    ruletaRusaTypescript()
    console.log("He pasado la ruleta satisfactoriamente")
} catch(e) {
    console.log("Ha ocurrido un error, y es este", e)
}





