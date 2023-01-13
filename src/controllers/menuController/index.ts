import inquirer from "inquirer"
import chalk from "chalk"
import { createSpinner } from "nanospinner"

import { Client } from "../../models/clients.js"

// 1 - Mensaje de bienvenida => console.log + chalk
// 2 - Pregunta nuestro nombre y lo almacena en una constante => type input
// 3 - Pregunta qué es lo que queremos hacer (EN BUCLE, hasta que le digamos que queremos salir)
// type list
//      a. Create
//      b. Read
//      c. Update
//      d. Delete
//      e. Salir

const saludoInicial = () => console.log(chalk.cyan("Hola mundo desde TypeScript"))

export const menuPrincipal = async () => {
  saludoInicial()
  const { name } = await inquirer.prompt([{
    message: "¿Cuál es tu nombre?",
    name: "name",
    type: "input"
  }])
  // Bucle constante hasta que el usuario diga que quiere salir
  while (true) {
    const { option } = await inquirer.prompt([{
      message: `Hola ${name}, ¿qué quieres hacer?`,
      type: "list",
      choices: [
        "1. Crear nuevo cliente",
        "2. Leer listado de clientes",
        "3. Actualizar datos de cliente",
        "4. Eliminar cliente",
        "5. Salir"
      ],
      name: "option"
    }])
    if (option === "5. Salir") return
    if (option === "1. Crear nuevo cliente") {
      // inquirer -> muestra un prompt con la info que queremos introducir
      const { name, email, address, phone, isActive } = await inquirer.prompt([{
        message: "Nombre del cliente",
        name: "name",
        type: "input",
        default: "Mario Casas"
      }, {
        message: "Email",
        name: "email",
        type: "input"
      }, {
        message: "Dirección",
        name: "address",
        type: "input"
      }, {
        message: "Teléfono",
        name: "phone",
        type: "input"
      }, {
        message: "¿Es un cliente activo?",
        name: "isActive",
        choices: ["Activo"],
        type: "checkbox"
      }])
      console.log({ name, email, address, phone, isActive })
    }
    if (option === "2. Leer listado de clientes") {
      // Crear el spinner
      // Inicializar el spinner
      const clientSpinner = createSpinner("Buscando clientes...")
      clientSpinner.start()

      // Mostrar los clientes
      // 1 - Llamamos a la api
      const clients: Client[] | undefined = await Client.getAllClients()
      // Finalizar el spinner
      clientSpinner.success({ text: "Clientes encontrados con éxito" })

      // 2 - Mostramos los clientes
      clients?.forEach((client: Client, index: number) => {
        console.log(
          chalk.magenta(
                        `${index + 1}. ${client.name} - ${client.email}`
          )
        )
      })
    }
  }
}
