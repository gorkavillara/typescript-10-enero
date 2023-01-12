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
}

class Triangulo extends Figura {
    constructor(b: number, h: number) {
        super("Triángulo", b, h) // Es necesario llamar al constructor de la clase padre
    }

    quienSoy() {
        return `Soy un triángulo de base ${this.base} y altura ${this.altura}`
    }

    obtenArea() { // Polimorfismo -> nueva morfología a un método
        return super.obtenArea() / 2
    }

    static definicion() {
        return "Soy una clase de tipo triángulo, introduce la base y la altura en el constructor"
    }
}

const miTriangulo: Triangulo = new Triangulo(20, 30)
console.log(miTriangulo.quienSoy())

console.log(miTriangulo.obtenArea())

console.log(Triangulo.definicion())