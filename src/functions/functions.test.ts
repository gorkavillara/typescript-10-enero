/* eslint-disable no-undef */

const sumando = (a: number, b: number): number => a + b
interface Persona {
  nombre: string
  email: string
}

describe("Grupo de testing inicial", () => {
  test("Probamos que los test funcionan", () => {
    // Vamos a escribir nuestro test
    //   const valor = sumando(2, 3) // valor = 5
    expect(sumando(2, 3)).toBe(5)
  })

  test("Clonamos un objeto", () => {
    const persona: Persona = {
      nombre: "Rick",
      email: "rick@email.com"
    }

    const segundaPersona = { ...persona }

    expect(persona).not.toBe(segundaPersona)
    expect(persona).toEqual(segundaPersona)
  })
})
