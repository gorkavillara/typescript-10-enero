var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1 - Relacionados con el framework o el entorno de ejecución (Node)
// 2 - Librerías de terceros
// 3 - Componentes propios
import axios from "axios";
import { endpoint } from "../data/index.js";
export class Client {
    constructor(n, a, p, e) {
        this.isActive = true;
        this.name = n;
        this.address = a;
        this.phone = p;
        this.email = e;
    }
    static getAllClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawResponse = yield axios
                .get(endpoint)
                .catch(console.error);
            const rawClients = rawResponse === null || rawResponse === void 0 ? void 0 : rawResponse.data.clientes;
            console.log(rawClients);
        });
    }
}
