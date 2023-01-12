class Figura {
    private _nombre: string
    base: number
    altura: number
    constructor(n: string, b: number, h: number) {
        // Inicialice los atributos intrínsecos de este objeto
        this._nombre = n
        this.base = b
        this.altura = h
    }

    obtenArea() {
        return this.base * this.altura
    }

    obtenAltura() { // método getter
        return this.altura
    }

    cambiaAltura(h: number) { // método setter
        this.altura = h
    }

    get area() {
        return this.obtenArea()
    }

    // setter
    set cambiaBase(b: number) {
        this.base = b
    }

    // obtenNombre() {
    //     return this._nombre
    // }

    get obtenNombre() { 
        return this._nombre //QUE OCURRE AQUI
    }
}

const miFigura: Figura = new Figura("cuadrado", 5, 5)
console.log(miFigura.obtenAltura())

console.log(miFigura.obtenNombre)
const miSegundaFigura: Figura = new Figura("Rectángulo", 10, 5)

miFigura.cambiaAltura(100)
console.log(miFigura)
console.log(miFigura.obtenAltura())

miFigura.cambiaBase = 20
console.log(miFigura.obtenNombre)

console.log(miFigura.base)
