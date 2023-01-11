var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import chalk from 'chalk';
// 1 - Mensaje de bienvenida => console.log + chalk
// 2 - Pregunta nuestro nombre y lo almacena en una constante => type input
// 3 - Pregunta qué es lo que queremos hacer (EN BUCLE, hasta que le digamos que queremos salir)
// type list
//      a. Create
//      b. Read
//      c. Update
//      d. Delete
//      e. Salir
const saludoInicial = () => console.log(chalk.cyan("Hola mundo desde TypeScript"));
export const menuPrincipal = () => __awaiter(void 0, void 0, void 0, function* () {
    saludoInicial();
    const { name } = yield inquirer.prompt([{
            message: "¿Cuál es tu nombre?",
            name: "name",
            type: "input"
        }]);
    // Bucle constante hasta que el usuario diga que quiere salir
    while (true) {
        const { option } = yield inquirer.prompt([{
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
            }]);
        if (option === "5. Salir")
            return;
        console.log(`Opción elegida: ${option}`);
    }
});
