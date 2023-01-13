/* eslint-disable camelcase, no-unused-vars */

// 1 - Relacionados con el framework o el entorno de ejecución (Node)
// 2 - Librerías de terceros
// 3 - Componentes propios
import axios, { AxiosResponse } from "axios"

import { endpoint } from "../data/index.js"

export class Client {
  name: string
  address: string
  phone: string
  email: string
  id: string = ""
  isActive: boolean = true

  constructor(n: string, a: string, p: string, e: string) {
    this.name = n
    this.address = a
    this.phone = p
    this.email = e
  }

  static async getAllClients() {
    const rawResponse: void | AxiosResponse<any, any> = await axios
      .get(endpoint)
      .catch(console.error)

    const rawClients: any[] | undefined = rawResponse?.data.clientes

    const clients: Client[] | undefined = rawClients?.map((rawClient: any) => {
      // eslint-disable-next-line camelcase
      const { nombre, numero_telefono, direccion, email, id } = rawClient
      return {
        name: nombre,
        phone: numero_telefono, // eslint-disable-line camelcase
        address: direccion,
        email,
        id,
        isActive: true
      }
    })
    return clients
  }
}
