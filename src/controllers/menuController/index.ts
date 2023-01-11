import inquirer from "inquirer"
import chalk from 'chalk'

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

export const menuPrincipal = async() => {
    saludoInicial()
    const { name } = await inquirer.prompt([{
        message: "¿Cuál es tu nombre?",
        name: "name",
        type: "input"
    }])
    // Bucle constante hasta que el usuario diga que quiere salir
    while(true) {
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
        console.log(`Opción elegida: ${option}`)
    }
}