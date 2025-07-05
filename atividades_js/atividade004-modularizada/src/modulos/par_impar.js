import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function Verificar_parImpar() {
    botaoEvento('verificar_par_impar', () => {
        const valorInput = verificarValor('valor_par_impar',);

    const elemento = valorInput % 2 === 0 ? `par` : `impar`;
    printResultado("resultado_par_impar" , `${elemento}`);
    })
}