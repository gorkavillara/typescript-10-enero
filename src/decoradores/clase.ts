function alumnoMuyListo<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      lenguajeFavorito = "Typescript"
    }
  }
  
  @alumnoMuyListo
  class Alumno {
    nombre: string
    edad: number
    lenguajeFavorito?: string
    constructor(n: string, e: number) {
      this.nombre = n
      this.edad = e
    }
  }
  
  const alumno = new Alumno("Gorka", 35)
  console.log(alumno.nombre) // Antes del decorador "Gorka" - Después del decorador "Gorka"
  console.log(alumno.lenguajeFavorito) // Antes del decorador "undefined" - Después del decorador "Typescript"