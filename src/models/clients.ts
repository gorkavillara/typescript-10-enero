// 1 - Relacionados con el framework o el entorno de ejecución (Node)
// 2 - Librerías de terceros
// 3 - Componentes propios
import axios, { AxiosResponse } from "axios";

import { endpoint } from "../data/index.js";

export class Client {
  name: string;
  address: string;
  phone: string;
  email: string;
  isActive: boolean = true;

  constructor(n: string, a: string, p: string, e: string) {
    this.name = n;
    this.address = a;
    this.phone = p;
    this.email = e;
  }

  static async getAllClients() {
    const rawResponse: void | AxiosResponse<any, any> = await axios
      .get(endpoint)
      .catch(console.error);

    const rawClients: any[] | undefined = rawResponse?.data.clientes;

    console.log(rawClients);
  }
}
